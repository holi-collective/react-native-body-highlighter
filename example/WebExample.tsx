import React, { useState } from 'react';
import Body, { BodyPart, Slug } from '../index';

const WebExample: React.FC = () => {
  const [selectedBodyParts, setSelectedBodyParts] = useState<BodyPart[]>([
    {
      slug: 'chest-left' as Slug,
      color: '#FF6B6B',
      intensity: 1
    },
    {
      slug: 'chest-right' as Slug,
      color: '#FF6B6B',
      intensity: 1
    }
  ]);

  const handleBodyPartPress = (bodyPart: BodyPart) => {
    console.log('Body part pressed:', bodyPart);
    // Add logic to handle body part selection
    const exists = selectedBodyParts.find(part => part.slug === bodyPart.slug);
    if (exists) {
      setSelectedBodyParts(prev => prev.filter(part => part.slug !== bodyPart.slug));
    } else {
      setSelectedBodyParts(prev => [...prev, { ...bodyPart, color: '#FF6B6B', intensity: 1 }]);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Body Highlighter - Web Example</h1>
      <p>Click on body parts to highlight them!</p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div>
          <h3>Male - Front</h3>
          <Body
            data={selectedBodyParts}
            scale={1}
            colors={['#FF6B6B', '#FF8E53', '#FF6B35']}
            frontOnly={false}
            backOnly={false}
            side="front"
            gender="male"
            onBodyPartPress={handleBodyPartPress}
          />
        </div>
        
        <div>
          <h3>Male - Back</h3>
          <Body
            data={selectedBodyParts}
            scale={1}
            colors={['#FF6B6B', '#FF8E53', '#FF6B35']}
            frontOnly={false}
            backOnly={false}
            side="back"
            gender="male"
            onBodyPartPress={handleBodyPartPress}
          />
        </div>
        
        <div>
          <h3>Female - Front</h3>
          <Body
            data={selectedBodyParts}
            scale={1}
            colors={['#4ECDC4', '#44A08D', '#093637']}
            frontOnly={false}
            backOnly={false}
            side="front"
            gender="female"
            onBodyPartPress={handleBodyPartPress}
          />
        </div>
        
        <div>
          <h3>Female - Back</h3>
          <Body
            data={selectedBodyParts}
            scale={1}
            colors={['#4ECDC4', '#44A08D', '#093637']}
            frontOnly={false}
            backOnly={false}
            side="back"
            gender="female"
            onBodyPartPress={handleBodyPartPress}
          />
        </div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Body Parts:</h3>
        <ul>
          {selectedBodyParts.map(part => (
            <li key={part.slug}>{part.slug}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebExample; 