# React Body Highlighter - Cross-Platform

A powerful and flexible body highlighting component that works seamlessly across **React Native** and **React Web** platforms.

## ✨ Features

- 🔄 **Cross-platform compatibility** - Works on both React Native and React Web
- 👫 **Gender support** - Male and female body representations
- 🎨 **Customizable colors** - Support for multiple colors and intensities
- 📱 **Responsive design** - Scalable SVG components
- 🎯 **Interactive** - Click/press handlers for body parts
- 📦 **TypeScript support** - Full type definitions included

## 📦 Installation

### For React Native Projects

```bash
npm install @teambuildr/react-native-body-highlighter react-native-svg
# or
yarn add @teambuildr/react-native-body-highlighter react-native-svg
```

For React Native, you'll also need to follow the [react-native-svg installation guide](https://github.com/react-native-svg/react-native-svg).

### For React Web Projects

```bash
npm install @teambuildr/react-native-body-highlighter
# or
yarn add @teambuildr/react-native-body-highlighter
```

No additional dependencies needed for web projects!

## 🚀 Basic Usage

### React Native

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import Body, { BodyPart, Slug } from '@teambuildr/react-native-body-highlighter';

const MyComponent = () => {
  const [selectedParts, setSelectedParts] = useState<BodyPart[]>([
    {
      slug: 'chest-left' as Slug,
      color: '#FF6B6B',
      intensity: 1
    }
  ]);

  const handleBodyPartPress = (bodyPart: BodyPart) => {
    console.log('Selected:', bodyPart.slug);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Body
        data={selectedParts}
        scale={1}
        colors={['#FF6B6B', '#FF8E53', '#FF6B35']}
        side="front"
        gender="male"
        onBodyPartPress={handleBodyPartPress}
      />
    </View>
  );
};
```

### React Web

```tsx
import React, { useState } from 'react';
import Body, { BodyPart, Slug } from '@teambuildr/react-native-body-highlighter';

const MyComponent = () => {
  const [selectedParts, setSelectedParts] = useState<BodyPart[]>([
    {
      slug: 'chest-left' as Slug,
      color: '#FF6B6B',
      intensity: 1
    }
  ]);

  const handleBodyPartPress = (bodyPart: BodyPart) => {
    console.log('Selected:', bodyPart.slug);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Body
        data={selectedParts}
        scale={1}
        colors={['#FF6B6B', '#FF8E53', '#FF6B35']}
        side="front"
        gender="male"
        onBodyPartPress={handleBodyPartPress}
      />
    </div>
  );
};
```

## 📚 API Reference

### Body Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `BodyPart[]` | ✅ | - | Array of body parts to highlight |
| `scale` | `number` | ✅ | - | Scale factor for the body diagram |
| `colors` | `string[]` | ✅ | - | Array of colors for different intensities |
| `side` | `"front" \| "back"` | ✅ | - | Which side of the body to show |
| `gender` | `"male" \| "female"` | ❌ | `"male"` | Gender of the body diagram |
| `onBodyPartPress` | `(bodyPart: BodyPart) => void` | ✅ | - | Callback when a body part is pressed |

### BodyPart Interface

```tsx
interface BodyPart {
  slug: Slug;           // Unique identifier for the body part
  color: string;        // Color to highlight the body part
  intensity?: number;   // Intensity level (uses colors array index)
  pathArray?: string[]; // SVG path data (auto-populated)
}
```

### Available Body Parts (Slug)

The library supports the following body parts:

**Core & Torso:**
- `abs-upper`, `abs-lower`
- `chest-left`, `chest-right`
- `obliques-left`, `obliques-right`

**Arms:**
- `biceps-left`, `biceps-right`
- `triceps-left-front`, `triceps-right-front`, `triceps-left-back`, `triceps-right-back`
- `forearm-left-front`, `forearm-right-front`, `forearm-left-back`, `forearm-right-back`
- `deltoids-left-front`, `deltoids-right-front`, `deltoids-left-back`, `deltoids-right-back`

**Legs:**
- `quadriceps-left`, `quadriceps-right`
- `hamstring-left`, `hamstring-right`
- `calves-left-front`, `calves-right-front`, `calves-left-back`, `calves-right-back`
- `adductors-left-front`, `adductors-right-front`, `adductors-left-back`, `adductors-right-back`
- `tibialis-left`, `tibialis-right`

**Back:**
- `upper-back-left`, `upper-back-right`
- `lower-back-left`, `lower-back-right`
- `gluteal-left`, `gluteal-right`
- `trapezius-left-front`, `trapezius-right-front`, `trapezius-left-back`, `trapezius-right-back`

**Extremities:**
- `hands-left-front`, `hands-right-front`, `hands-left-back`, `hands-right-back`
- `feet-left-front`, `feet-right-front`, `feet-left-back`, `feet-right-back`
- `ankles-left-front`, `ankles-right-front`, `ankles-left-back`, `ankles-right-back`

**Other:**
- `head-front`, `head-back`
- `neck-left-front`, `neck-right-front`, `neck-left-back`, `neck-right-back`
- `knees-left`, `knees-right`
- `hips-left`, `hips-right`

## 🎨 Advanced Examples

### Multiple Intensities

```tsx
const bodyParts: BodyPart[] = [
  { slug: 'chest-left', color: '#FF6B6B', intensity: 1 },     // Light
  { slug: 'chest-right', color: '#FF6B6B', intensity: 2 },    // Medium
  { slug: 'abs-upper', color: '#FF6B6B', intensity: 3 },      // Dark
];

<Body
  data={bodyParts}
  colors={['#FFE5E5', '#FF6B6B', '#CC0000']} // Light to dark
  scale={1.2}
  side="front"
  gender="male"
  onBodyPartPress={handlePress}
/>
```

### Dynamic Body Part Selection

```tsx
const [selectedParts, setSelectedParts] = useState<BodyPart[]>([]);

const toggleBodyPart = (bodyPart: BodyPart) => {
  setSelectedParts(prev => {
    const exists = prev.find(part => part.slug === bodyPart.slug);
    if (exists) {
      return prev.filter(part => part.slug !== bodyPart.slug);
    } else {
      return [...prev, { ...bodyPart, color: '#FF6B6B', intensity: 1 }];
    }
  });
};
```

## 🔧 Platform Detection

The library automatically detects the platform and uses the appropriate SVG implementation:

- **React Native**: Uses `react-native-svg`
- **React Web**: Uses native HTML SVG elements

## 🚀 Migration from React Native Only

If you're migrating from a React Native only setup:

1. Update your package.json dependencies (remove direct `react-native-svg` dependency)
2. No code changes needed - the API remains the same!
3. The library will automatically work on web

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for both platforms
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆕 Changelog

### v3.0.7
- ✅ Added React Web compatibility
- ✅ Cross-platform SVG components
- ✅ Maintained backward compatibility
- ✅ Updated TypeScript definitions
- ✅ Added comprehensive examples

---

**Note**: This library maintains 100% backward compatibility with existing React Native implementations while adding web support. 