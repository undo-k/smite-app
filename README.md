# Smite App  
**A lightweight site that provides quick from the popular multiplayer-online-battle-arena [SMITE](https://smitegame.com/.)**  
  
My goal was to provide a fast, mobile-friendly build recommendation experience. The site is built with Nuxt, Vue, and Pico CSS.
  
In January 2024 Smite 2 was announced and requests for HiRez/Smite's developer API were closed, effectively killing the project. However, I perservered and made a mock-api to try and have a mostly working minimum viable product if they ever open their applications back up.

This is the frontend, you can find the backend here: https://github.com/undo-k/smite-mono

Instructions for running:
1. Clone both repos
2. `cd smite-mono`
3. `make up_build`
4. `cd .. && cd smite-app`
5. `yarn dev` or `yarn dev --host` if you want to view it on mobile

The site should then be running on http://localhost:3000/

