# Automatic Last Updated Date

This directory contains scripts for automatically updating the "Last updated" date on the portfolio website.

## How it works

1. **Script**: `update-last-updated.js` - Generates a TypeScript file with the current date
2. **Git Hook**: `.git/hooks/pre-push` - Automatically runs the script before each push
3. **Build Integration**: The date is updated during the build process
4. **Component**: The HomeBody component imports and displays the generated date

## Files

- `update-last-updated.js` - Main script that generates `src/constants/lastUpdated.ts`
- `src/constants/lastUpdated.ts` - Generated file containing the current date (DO NOT EDIT MANUALLY)

## Usage

The system works automatically:

1. **Manual update**: Run `npm run update-date`
2. **Build time**: Date is updated when running `npm run build`
3. **Git push**: Date is automatically updated before each push via git hook

## Git Hook

The pre-push hook:
1. Updates the last updated date
2. Adds the updated file to git
3. Creates a commit with the updated date
4. Continues with the push

This ensures the date is always current when you push changes to the repository.
