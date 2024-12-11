/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "node",
  tailwind: false,
  postcss: false,
  watchPaths: ["./public"],
  serverBuildPath: "build/index.js",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
