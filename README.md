# Survey Forms
[![Netlify Status](https://api.netlify.com/api/v1/badges/48778713-8412-4dbb-a162-0261c37e7d1c/deploy-status)](https://app.netlify.com/sites/classum-01-survey-forms-jiheon788/deploys)

## [Demo](https://classum-01-survey-forms-jiheon788.netlify.app)&nbsp;&nbsp;&nbsp;&nbsp;[Requirements Spec](./REQUIREMENTS.md)

It's a project to implement **Google Forms**. All requirements have been complied with. Created from a [Custom CRA + TypeScript template](https://github.com/jiheon788/react-boilerplate) for frequently used Path Alias, Dynamic Routing, eslint, and Prettier settings.

## Getting Started
You can install and run it yourself by following the commands. Or You can view a [live demo](https://classum-01-survey-forms-jiheon788.netlify.app)

#### Install
```
npm i
```
#### Build
```
npm run build
```
#### Start
```
npm start
```

## Features

- CRU- form (Title, Description)
- CRUD questions (short/long answer type, multiple choice, checkbox, dropdown)
  - Confirm deletion
  - Copy question
  - Setting required question options
- CRUD question options (multiple choice, checkbox, dropdown)
- Preview form (submit, initialize response)
- Change question & option order using Custom Hooks (Drag & Drop)

## Tech stack

`React`, `TypeScript`, `Redux-toolkit`, `Chakra-UI`, `react-hook-form`, `react-uuid`, `react-router-dom`,  `craco`

## Directory

```bash
src
├─components
│  ├─common  
│  ├─formCreator  
│  └─formViewer 
├─constants 
├─hooks 
├─meta 
├─pages 
├─store 
│  └─slices
└─styles 
```