'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDCanvasProps {
  className?: string;
}

export function ThreeDCanvas({ className }: ThreeDCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction and continuous rotation
    const group = new THREE.Group();
    scene.add(group);

    // Primary wireframe crystal / geometric polyhedron
    const geometry = new THREE.IcosahedronGeometry(1.7, 1);
    
    // Wireframe edges with monochromatic ink tone
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x141414,
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    group.add(wireframe);

    // Inner subtle mesh with ambient light reflection (glass-like monochrome core)
    const innerGeometry = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5f7,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.7,
      transparent: true,
      opacity: 0.4,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Floating orbital node particles
    const particlesCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 0.8;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = radius * Math.cos(theta);
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x141414,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Lighting for depth
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLightBack = new THREE.PointLight(0x0066ff, 1.5, 50);
    pointLightBack.position.set(-5, -5, -3);
    scene.add(pointLightBack);

    // Mouse tracking for fluid parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      targetRotationY = x * 1.2;
      targetRotationX = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle ambient drift
      group.rotation.y = elapsedTime * 0.15;
      group.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;
      particles.rotation.y = -elapsedTime * 0.08;

      // Mouse parallax smooth lerp
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      group.position.x = currentRotationY * 0.8;
      group.position.y = -currentRotationX * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      innerGeometry.dispose();
      particleGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      innerMaterial.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className || 'w-full h-full min-h-[350px] md:min-h-[480px] flex items-center justify-center'}
    />
  );
}
