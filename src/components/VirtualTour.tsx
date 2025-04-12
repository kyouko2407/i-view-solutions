'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

interface Hotspot {
  id: string;
  position: THREE.Vector3;
  title: string;
  description: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  hotspots: Hotspot[];
}

interface VirtualTourProps {
  roomId: string;
}

const rooms: Record<string, Room> = {
  classroom1: {
    id: 'classroom1',
    name: 'Modern Classroom',
    description: 'Interactive learning environment with smart boards',
    hotspots: [
      {
        id: 'smartboard',
        position: new THREE.Vector3(10, 0, -10),
        title: 'Smart Board',
        description: 'Interactive whiteboard with touch capabilities'
      },
      {
        id: 'seating',
        position: new THREE.Vector3(-10, -2, 5),
        title: 'Student Area',
        description: 'Ergonomic seating arranged for group activities'
      }
    ]
  },
  library: {
    id: 'library',
    name: 'Learning Library',
    description: 'Extensive collection of learning materials',
    hotspots: [
      {
        id: 'study-area',
        position: new THREE.Vector3(8, 0, 8),
        title: 'Study Area',
        description: 'Quiet zone for focused learning'
      },
      {
        id: 'digital-resources',
        position: new THREE.Vector3(-8, 1, -8),
        title: 'Digital Resources',
        description: 'Access to online learning materials'
      }
    ]
  },
  discussion: {
    id: 'discussion',
    name: 'Discussion Room',
    description: 'Space for group activities',
    hotspots: [
      {
        id: 'presentation-area',
        position: new THREE.Vector3(10, 1, 0),
        title: 'Presentation Area',
        description: 'Space for student presentations'
      },
      {
        id: 'collaboration-zone',
        position: new THREE.Vector3(-5, 0, 8),
        title: 'Collaboration Zone',
        description: 'Tables arranged for group work'
      }
    ]
  },
  language_lab: {
    id: 'language_lab',
    name: 'Language Lab',
    description: 'High-tech language learning facility',
    hotspots: [
      {
        id: 'audio-stations',
        position: new THREE.Vector3(8, 0, 5),
        title: 'Audio Stations',
        description: 'Individual listening and speaking practice booths'
      },
      {
        id: 'recording-studio',
        position: new THREE.Vector3(-8, 0, -5),
        title: 'Recording Studio',
        description: 'Professional recording space for pronunciation practice'
      }
    ]
  }
};

export default function VirtualTour({ roomId }: VirtualTourProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [hotspots, setHotspots] = useState<Hotspot[]>(rooms[roomId].hotspots);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const labelRenderer = new CSS2DRenderer();

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    labelRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    containerRef.current.appendChild(labelRenderer.domElement);
    
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';

    // Create a sphere for the panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    // Load the panorama texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      `/images/rooms/${roomId}.jpg`,
      (texture: THREE.Texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        setIsLoading(false);

        // Add hotspots
        const room = rooms[roomId];
        if (room) {
          room.hotspots.forEach(hotspot => {
            const hotspotDiv = document.createElement('div');
            hotspotDiv.className = 'bg-blue-500 text-white px-2 py-1 rounded-full cursor-pointer transform hover:scale-110 transition-transform';
            hotspotDiv.textContent = '•';
            
            const hotspotLabel = new CSS2DObject(hotspotDiv);
            hotspotLabel.position.copy(hotspot.position);
            scene.add(hotspotLabel);

            hotspotDiv.addEventListener('click', () => {
              setActiveHotspot(hotspot);
            });
          });
        }
      },
      undefined,
      (error: unknown) => {
        console.error('Error loading panorama:', error);
        setIsLoading(false);
      }
    );

    camera.position.set(0, 0, 0.1);

    // Controls
    let isDragging = false;
    let previousTouch = { x: 0, y: 0 };
    let previousMouse = { x: 0, y: 0 };
    let cameraRotation = { x: 0, y: 0 };

    const handleStart = (clientX: number, clientY: number) => {
      isDragging = true;
      previousMouse = { x: clientX, y: clientY };
      previousTouch = { x: clientX, y: clientY };
    };

    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;

      const delta = {
        x: clientX - (isMobile ? previousTouch.x : previousMouse.x),
        y: clientY - (isMobile ? previousTouch.y : previousMouse.y),
      };

      cameraRotation.x += delta.y * 0.005;
      cameraRotation.y += delta.x * 0.005;

      cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

      camera.rotation.x = cameraRotation.x;
      camera.rotation.y = cameraRotation.y;

      previousMouse = { x: clientX, y: clientY };
      previousTouch = { x: clientX, y: clientY };
    };

    const handleEnd = () => {
      isDragging = false;
    };

    // Mouse events
    containerRef.current.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
    containerRef.current.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    containerRef.current.addEventListener('mouseup', handleEnd);
    containerRef.current.addEventListener('mouseleave', handleEnd);

    // Touch events
    containerRef.current.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    });
    containerRef.current.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    });
    containerRef.current.addEventListener('touchend', handleEnd);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      labelRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [roomId, isMobile]);

  return (
    <div className="relative w-full h-[600px]">
      <div ref={containerRef} className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}
      {activeHotspot && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900">{activeHotspot.title}</h3>
          <p className="text-gray-600 mt-1">{activeHotspot.description}</p>
          <button
            onClick={() => setActiveHotspot(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      )}
      {isMobile && (
        <div className="absolute top-4 left-4 right-4 bg-black/50 text-white p-2 rounded text-sm text-center">
          Touch and drag to look around
        </div>
      )}
    </div>
  );
} 