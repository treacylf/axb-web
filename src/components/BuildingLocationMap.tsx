import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface BuildingLocationMapProps {
  buildingName: string;
  address: string;
  subway: string;
  coordinates?: [number, number]; // [longitude, latitude] 经纬度坐标
  defaultCoordinates?: [number, number]; // 默认坐标（用于演示）
}

export const BuildingLocationMap: React.FC<BuildingLocationMapProps> = ({
  buildingName,
  address,
  subway,
  coordinates = [121.4068, 31.1886], // 默认虹桥商务区坐标
  defaultCoordinates = [121.4068, 31.1886]
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coordinates,
      zoom: 15,
      pitch: 45,
    });

    // 添加导航控制
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // 添加建筑位置标记
    const marker = new mapboxgl.Marker({ color: '#FF6B6B' })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-semibold">${buildingName}</h3>
            <p class="text-sm text-gray-600 mt-1">${address}</p>
            <p class="text-sm text-gray-600">${subway}</p>
          </div>`
        )
      )
      .addTo(map.current);

    // 添加3D建筑图层
    map.current.on('load', () => {
      const layers = map.current?.getStyle().layers;
      if (!layers) return;

      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout && layer.layout['text-field']
      )?.id;

      map.current?.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

    setIsMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized && !mapboxToken) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            建筑位置与周边交通
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              请输入您的 Mapbox 公开访问令牌以显示地图。您可以在{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Mapbox 官网
              </a>
              {' '}注册并获取令牌。
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="输入 Mapbox Access Token"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={initializeMap} disabled={!mapboxToken}>
                加载地图
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          建筑位置与周边交通
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapContainer} 
          className="w-full h-[400px] rounded-lg overflow-hidden"
        />
        <div className="mt-4 p-4 bg-muted/30 rounded-lg space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">地址</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">地铁交通</p>
              <p className="text-sm text-muted-foreground">{subway}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
