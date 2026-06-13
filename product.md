# Sharbee - Local File Transfer & Chat

A production-ready Electron application for secure, local-first file sharing and chat over WiFi.

## Architecture

- **Frontend**: Next.js (Static Export)
- **Backend**: Socket.io + Express (Electron Main Process)
- **Desktop**: Electron with Electron Forge
- **Discovery**: mDNS/Bonjour for automatic host detection
- **Storage**: Memory-only (ephemeral, no database)

## Key Features

### 1. Host/Guest Model
- Electron apps can run as **hosts** (serving the app) or **guests** (connecting to another host)
- On startup, the app scans for existing Sharbee hosts via mDNS
- If hosts are found, user can choose to "Connect as Guest" or "Start New Host"
- Mobile/external users connect via browser as satellites
- Automatic mDNS broadcasting for easy discovery

### 2. Full Session History
- All connected users see the complete session history (messages and files)
- History persists for the duration of the host session
- Host can clear all history with the "Clear All History" button
- Individual files can be removed from the received files queue
- History is ephemeral and cleared when the host closes

### 3. Guest Disconnection Handling
- When a guest app loses connection to its host, a warning banner appears immediately
- After 6 seconds without reconnection, a dialog offers to "Switch to Host Mode" or "Quit"
- Seamless transition from guest to host without data loss

### 4. Large File Optimization
- Memory-efficient chunked transfers (256KB chunks)
- Express static file serving for downloads
- Temporary storage in system temp directory
- Streaming download support
- Scrollable file lists with viewport-based heights

### 5. Zero Configuration
- Auto-detects local IP
- Broadcasts via mDNS with unique hostname
- QR code generation for easy mobile access (with prominent button styling)
- Automatically finds available ports if default is in use

You are an expert frontend developer building a sleek, modern landing and download page for my desktop app, "Sharbee". 

Sharbee is an ultra-fast local network file-sharing desktop application built with Electron. The landing page needs to be built with React,  Tailwind CSS, and shadcn/ui(suggestion). 

### Brand Tone & Visual Style:
- Clean, utility-focused, high-performance SaaS aesthetic. 
- Deep background colors (dark mode by default or a rich modern workspace palette) with crisp typography.
- Avoid heavy walls of text. It should feel like a high-end tool.

### Component Structure Needed:

1. Navigation Bar:
   - App logo ("Sharbee") and simple clean links (Features, Support, Security).
   - A crisp "Download" CTA button pinned to the top right.

2. Hero Section:
   - High-impact headline focusing on utility (e.g., "Blazing fast file transfers across your local network. No cloud required.")
   - Primary Call to Action: A prominent "Get it from Microsoft" store badge link/button configuration.
   - Secondary Action: A secondary download button pointing to an explicit Windows Standalone Installer (.exe).
   - Mac Status: Underneath or next to the main buttons, include a beautifully styled, disabled or low-opacity button/badge that says "macOS App - Coming Soon".

3. Feature Matrix / Scaffolding (Grid layout):
   - Highlight three core values: Speed (local network performance), Privacy (no third-party cloud routing), and Simplicity (no complicated setups).

4. Embedded Support Form (The Inbound Email Pipeline):
   - A clean contact/support card near the bottom. 
   - Since we are utilizing a custom domain routing architecture, the front-end form should eventually send emails straight to "support@sharbee.app". For now, scaffold out the UI wrapper using a standard shadcn/ui Form component with validation fields for Name, Email, and Message.

### Configuration & Placeholders to Include in Code:
Because I haven't finalized the Microsoft Store registration or payment processing gateways yet, write the file using obvious text placeholders so I can drop the links in later.

Please place these exact layout flags inside the variables block:
- MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/PLACEHOLDER_ID" (Wrap this in a compliant Microsoft Store SVG badge layout block).
- STANDALONE_WINDOWS_EXE_URL = https://github.com/WayneDavenport/sharbee_updater_bin/releases/download/v1.0.0/SharbeeSetup.exe (This hooks up to our automated background release pipeline).

The dynamic link is sha256:eb19d6a70fe5730634af2b48ba897e62cfaaac9bfd1b0e16c9d54d65108ede6f for latest version 

Make the layout responsive, clean, and optimized for fast screen loading scans. Provide the code for the main landing page file.