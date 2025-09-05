import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// This component simulates a 3D VR headset model with CSS
const VRHeadsetModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let rotationX = 0;
    let rotationY = 0;
    let animationId: number;
    
    const animate = () => {
      rotationY += 0.3; // Slow rotation
      
      if (container) {
        container.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const distanceX = (e.clientX - centerX) / 20;
      const distanceY = (e.clientY - centerY) / 20;
      
      rotationX = -distanceY;
      rotationY = distanceX;
      
      container.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        ref={containerRef}
        className="vr-headset relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main headset body */}
        <div 
          className="w-64 h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg relative"
          style={{
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1) inset",
            transform: "translateZ(20px)",
          }}
        >
          {/* Visor */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-24 bg-gradient-to-r from-blue-900 via-black to-blue-900 rounded"
            style={{
              boxShadow: "0 0 15px rgba(0, 0, 255, 0.5) inset",
              transform: "translateZ(10px)",
            }}
          >
            {/* Lens left */}
            <div 
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.5) inset",
                transform: "translateZ(5px)",
              }}
            ></div>
            
            {/* Lens right */}
            <div 
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.5) inset",
                transform: "translateZ(5px)",
              }}
            ></div>
          </div>
          
          {/* Headstrap */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-40 border-t-4 border-gray-700 rounded-t-full"
            style={{
              transform: "translateZ(-10px)",
            }}
          ></div>
          
          {/* Details */}
          <div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-primary rounded-full"
            style={{
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
              transform: "translateZ(25px)",
            }}
          ></div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute inset-0 bg-primary/5 rounded-lg filter blur-xl"></div>
        <div className="absolute -inset-4 bg-primary/5 rounded-lg filter blur-3xl animate-pulse"></div>
      </motion.div>
    </div>
  );
};

export default VRHeadsetModel;