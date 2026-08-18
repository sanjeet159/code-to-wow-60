# Plan: Add Rent/Buy Tabs to Property Section

The user wants to add a "tab button" (Rent/Buy) to the right side of the properties section (likely "Selected Work") to filter properties by transaction type.

## Proposed Changes

### 1. Data Layer
- Update `src/data/properties.ts` to include a `category` field (e.g., 'rent' or 'buy') for each property.
- Assign some existing properties to 'rent' and others to 'buy' for demonstration.

### 2. UI Components
- Modify `src/routes/index.tsx`:
    - Add a `filter` state to the `Index` component (defaulting to 'buy' or 'all').
    - Locate the "Selected Work" section.
    - Implement a Tab switcher (Rent vs Buy) on the right side of the section heading.
    - Filter the `PROJECTS` array based on the selected tab before mapping them to cards.
    - Ensure smooth transitions when switching tabs using Framer Motion (if possible) or standard React state.

### 3. Styling
- Use the brand color `#861719` for the active tab state.
- Ensure the tabs are mobile-friendly and align with the existing minimalist aesthetic.

## Technical Details
- `filter` state: `const [propertyFilter, setPropertyFilter] = useState<'buy' | 'rent'>('buy');`
- Filter logic: `const filteredProjects = PROJECTS.filter(p => p.category === propertyFilter);`
- UI: A container with `flex justify-between items-end` for the title and tabs.

## Verification Plan
- Check the "Selected Work" section in the preview.
- Verify that clicking "Rent" shows different properties than "Buy".
- Check responsiveness on mobile.
