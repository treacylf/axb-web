import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    BMapGL: any;
    BMAP_ANIMATION_BOUNCE: any;
  }
}

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
  coordinates = [121.4068, 31.1886], // 默认虹桥商务区坐标 [longitude, latitude]
  defaultCoordinates = [121.4068, 31.1886]
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [baiduAk, setBaiduAk] = useState<string>('vxpfS0Bobq24tXyENR9n6VTmiLjlBZCo');
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadBaiduMapScript = () => {
    if (!baiduAk) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=${baiduAk}&callback=initBaiduMap`;
    document.head.appendChild(script);

    (window as any).initBaiduMap = () => {
      setScriptLoaded(true);
    };
  };

  const initializeMap = () => {
    if (!mapContainer.current || !window.BMapGL) return;

    // 百度地图使用的是 [纬度, 经度] 顺序，需要转换
    const point = new window.BMapGL.Point(coordinates[0], coordinates[1]);

    map.current = new window.BMapGL.Map(mapContainer.current);
    map.current.centerAndZoom(point, 17);
    map.current.enableScrollWheelZoom(true);

    // 添加3D控件
    const navi3DCtrl = new window.BMapGL.NavigationControl3D();
    map.current.addControl(navi3DCtrl);

    // 添加缩放控件
    const zoomCtrl = new window.BMapGL.ZoomControl();
    map.current.addControl(zoomCtrl);

    // 添加标记
    const marker = new window.BMapGL.Marker(point);
    map.current.addOverlay(marker);
    marker.setAnimation(window.BMAP_ANIMATION_BOUNCE);

    // 创建信息窗口
    const infoWindow = new window.BMapGL.InfoWindow(
      `<div style="padding: 10px; max-width: 250px;">
        <h3 style="font-weight: 600; margin-bottom: 8px; font-size: 16px;">${buildingName}</h3>
        <p style="color: #666; font-size: 14px; margin-bottom: 4px;">${address}</p>
        <p style="color: #666; font-size: 14px;">${subway}</p>
      </div>`,
      {
        width: 280,
        height: 120,
        title: ''
      }
    );

    // 点击标记显示信息窗口
    marker.addEventListener('click', () => {
      map.current.openInfoWindow(infoWindow, point);
    });

    // 默认打开信息窗口
    map.current.openInfoWindow(infoWindow, point);

    setIsMapInitialized(true);
  };

  useEffect(() => {
    if (scriptLoaded) {
      initializeMap();
    }
  }, [scriptLoaded]);

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.destroy();
      }
    };
  }, []);

  if (!isMapInitialized && !scriptLoaded) {
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
              请输入您的百度地图 API Key (AK) 以显示地图。您可以在{' '}
              <a
                href="https://lbsyun.baidu.com/apiconsole/key"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                百度地图开放平台
              </a>
              {' '}注册并获取 AK。
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="输入百度地图 AK"
                value={baiduAk}
                onChange={(e) => setBaiduAk(e.target.value)}
                className="flex-1"
              />
              <Button onClick={loadBaiduMapScript} disabled={!baiduAk}>
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
