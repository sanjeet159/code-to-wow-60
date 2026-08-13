# Plan: Add Team Section with "Four Agents" Layout

Add a new section to the landing page that showcases the team, styled after the provided reference image. It will feature a prominent headline, contact buttons, and three (expandable to four) team member cards with high-quality grayscale imagery.

## User Review Required

> [!IMPORTANT]
> The user mentioned "I have four agents", but the reference image shows 3 columns. I will implement a 4-column layout to match the stated requirement of 4 agents.

- **Layout**: Centered headline on the left, "Call now" and "WhatsApp" buttons on the right.
- **Content**: Four agent profiles (Client Advisory, Commercial Desk, Rentals Desk, and a new Investment Desk).
- **Design**: Grayscale portraits with hover effects, minimalist typography.

## Technical Details

- **Component**: Create a new `TeamSection` component in `src/routes/index.tsx` or as a separate component.
- **Assets**: Use `lovable-assets` to create pointers for agent images (team1, team2, team3, plus a new placeholder/generated image for the 4th agent).
- **Styling**: Tailwind CSS for grid layout ( `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
- **Interaction**: Framer Motion (via `Reveal`) for scroll entrance animations.

1. **Modify `src/routes/index.tsx`**:
    - Update `TEAM` constant to include 4 members.
    - Implement the `TeamSection` UI matching the reference image.
    - Replace the existing "Proof strip" or "Team" section with this new polished version.
2. **Update `src/components/landor/ContactButtons.tsx`**:
    - Ensure it supports the specific styling seen in the header of the team section (solid burgundy/outline style).
