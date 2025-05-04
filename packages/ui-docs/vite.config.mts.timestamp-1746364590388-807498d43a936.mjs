// vite.config.mts
import { defineConfig } from "file:///run/media/sab/Data/GitHub/ui/node_modules/.pnpm/vite@5.4.14_@types+node@22.15.3_lightningcss@1.29.2/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///run/media/sab/Data/GitHub/ui/node_modules/.pnpm/@builder.io+qwik@1.13.0_vite@5.4.14_@types+node@22.15.3_lightningcss@1.29.2_/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///run/media/sab/Data/GitHub/ui/node_modules/.pnpm/@builder.io+qwik-city@1.13.0_rollup@4.40.1_typescript@5.8.3_vite@5.4.14_@types+node@22.15.3_lightningcss@1.29.2_/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///run/media/sab/Data/GitHub/ui/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@5.8.3_vite@5.4.14_@types+node@22.15.3_lightningcss@1.29.2_/node_modules/vite-tsconfig-paths/dist/index.js";
import tailwindcss from "file:///run/media/sab/Data/GitHub/ui/node_modules/.pnpm/@tailwindcss+vite@4.1.5_vite@5.4.14_@types+node@22.15.3_lightningcss@1.29.2_/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      tailwindcss()
    ],
    build: {
      target: "es2022"
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022"
      }
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3J1bi9tZWRpYS9zYWIvRGF0YS9HaXRIdWIvdWkvcGFja2FnZXMvdWktZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3J1bi9tZWRpYS9zYWIvRGF0YS9HaXRIdWIvdWkvcGFja2FnZXMvdWktZG9jcy92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3J1bi9tZWRpYS9zYWIvRGF0YS9HaXRIdWIvdWkvcGFja2FnZXMvdWktZG9jcy92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXInO1xuaW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tICdAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBxd2lrQ2l0eSgpLFxuICAgICAgcXdpa1ZpdGUoKSxcbiAgICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICAgIHRhaWx3aW5kY3NzKCksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICB0YXJnZXQ6IFwiZXMyMDIyXCJcbiAgICB9LFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImVzMjAyMlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTYwMCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsb0JBQW9CO0FBQzNWLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDWjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1YsZ0JBQWdCO0FBQUEsUUFDWixRQUFRO0FBQUEsTUFDWjtBQUFBLElBQ0o7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
