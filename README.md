# AI Auto-Reply Application

## Project Overview
This is an AI-powered auto-response application that helps manage and generate intelligent email or message responses using advanced AI models.

## Project Structure

### Hooks
- `use-mobile.tsx`: Mobile-specific hook for responsive functionality
- `use-toast.ts`: Toast notification management hook

### Components
#### Main Components
- `ai-model-selector.tsx`: Component for selecting AI models
- `auto-responder.tsx`: Core auto-response generation component
- `dashboard.tsx`: Main dashboard interface
- `email-preview.tsx`: Email preview functionality
- `integration-settings.tsx`: Settings for external integrations
- `response-generator.tsx`: AI response generation logic
- `response-history.tsx`: Tracking and displaying response history
- `theme-provider.tsx`: Theme management and context

#### UI Components
Comprehensive set of shadcn/ui components including:
- Accordion
- Alert
- Alert Dialog
- Avatar
- Badge
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Form
- Hover Card
- Input
- Input OTP
- Label
- Menu Bar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner
- Switch

## Prerequisites
- Node.js (v18+)
- npm or yarn
- React
- TypeScript

## Installation

1. Clone the repository
```bash
git clone <[your-repo-url](https://github.com/DurgaPrashad/Autoreply-ai)>
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file with necessary configurations:
```
NEXT_PUBLIC_AI_API_KEY=your_ai_api_key
NEXT_PUBLIC_DEFAULT_MODEL=default_model_name
```

## Running the Application

```bash
npm run dev
# or
yarn dev
```

## Key Features
- AI-powered auto-response generation
- Multiple AI model selection
- Response history tracking
- Mobile-responsive design
- Customizable integration settings
- Dark/Light theme support

## Configuration
Modify `integration-settings.tsx` to configure:
- AI model preferences
- Response generation parameters
- External service integrations

## Troubleshooting
- Ensure all dependencies are correctly installed
- Check console for any error messages
- Verify API keys and configurations

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


