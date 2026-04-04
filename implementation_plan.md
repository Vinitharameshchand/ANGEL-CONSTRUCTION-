# Dynamic Website Integration Plan (Sanity CMS)

To make the Angel Construction website dynamic so that your client can easily manage content (text, images, projects, testimonials) without touching the code, the best approach is to use a Headless CMS. 

I propose using **Sanity CMS**. It provides a beautiful, user-friendly "Studio" dashboard for the client, and an easy-to-use API for our existing React application.

## User Review Required

> [!IMPORTANT]  
> Integrating a CMS is a major architectural step. It means that the website content will no longer strictly live inside `Home.tsx` or `About.tsx`. Instead, the React app will fetch the content from Sanity servers when it loads. 
> 
> Also, to go live with this:
> 1. You will need to create a free Sanity.io account.
> 2. The Studio (admin panel) will be deployed separately (or configured via an embedded route) so the client has a secure login link (e.g., `admin.angelconstruction.com`).
> 
> Do you approve of using Sanity CMS for this requirement?

## Proposed Changes

We will execute this in layers to ensure nothing breaks during the transition.

### 1. Backend: Sanity Studio Setup
We will initialize a Sanity project inside a new folder called `studio` (or `cms`).
#### [NEW] `studio/`
Contains the Sanity configuration and schemas. We will define schemas (data models) for:
- **Projects**: Title, category, main image, gallery, description.
- **Services**: Icon, title, description.
- **Site Settings**: Phone numbers, email, social links, logo.
- **Pages (Home, About)**: Hero text, mission/vision statements, background videos/images.

### 2. Frontend: API Integration
We will connect the existing React application to the new Sanity backend.
#### [MODIFY] `package.json`
Add dependencies: `@sanity/client` and `@sanity/image-url`.
#### [NEW] `src/lib/sanity.ts`
Setup the Sanity client configuration with your `projectId` and `dataset`.

### 3. Frontend: Component Migration
We will replace the hardcoded arrays (e.g., `projects`, `services`, `testimonials`) with data fetched dynamically.
#### [MODIFY] `src/pages/Home.tsx`
- Add `useEffect` / state hooks to fetch `heroInfo`, `projects`, and `services` from Sanity.
- Swap out hardcoded text and imported images with the fetched data strings and Sanity image URLs.
#### [MODIFY] `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Projects.tsx`
- Connect each page to their respective Sanity queries so the client can manage their contents.

## Open Questions

> [!WARNING]  
> **Sanity Initialization:** Should I go ahead and initialize the Sanity CMS locally in a folder named `sanity-studio`? This will involve me running `npx create-sanity@latest` and setting up the initial schemas. 
> Alternatively, if you already have a preferred CMS (like Strapi or Supabase), let me know!

## Verification Plan

### Automated Tests
- Build and run the Sanity Studio locally to ensure schemas compile without errors.
- Ensure the React application starts successfully without type errors.

### Manual Verification
- We will insert sample data into the local Studio dashboard.
- We will verify that the frontend app correctly renders the sample data and that animations still behave perfectly on dynamic elements.
