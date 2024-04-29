import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import globalSlice from "./reducers/global/globalStates";
// import globalSlice from "./reducers/global/globalStates";

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// setupListeners(store.dispatch);
export default store;

// import "@progress/kendo-theme-default/dist/all.css";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import { ReduxProviders } from "./components/ReduxAuthProviders";
// import Sidebar from "./components/Sidebar";
// import { SessionProvider } from "next-auth/react";
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
// const themes = {
//   dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
//   light: `${process.env.PUBLIC_URL}/light-theme.css`,
// };
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css?family=Poppins"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
//         />
//       </head>
//       <body>
//         <SessionProvider>
//           <ReduxProviders>
//             <div className="fixed max-w-full max-h-full w-full h-full">
//               <Navbar />
//               <Sidebar>
//                 <div>{children}</div>
//               </Sidebar>
//             </div>
//           </ReduxProviders>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }
// 6:10
// // components/RootLayout.tsx
// import React from "react";
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";
// import Navbar from "./Navbar";
// import { ReduxProviders } from "./ReduxAuthProviders";
// import Sidebar from "./Sidebar";
// import { SessionProvider } from "next-auth/react";
// import { ThemeProvider } from "styled-components"; // Import your theme provider
// const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const themes = {
//     dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
//     light: `${process.env.PUBLIC_URL}/light-theme.css`,
//   };
//   return (
//     <SessionProvider>
//       <ReduxProviders>
//         <ThemeSwitcherProvider
//           themeMap={themes}
//           defaultTheme="light"
//           insertionPoint="styles-insertion-point"
//         >
//           <ThemeProvider theme={{ mode: "light" }}> {/* Adjust with your actual theme */}
//             <div className="fixed max-w-full max-h-full w-full h-full">
//               <Navbar />
//               <Sidebar>
//                 <div>{children}</div>
//               </Sidebar>
//             </div>
//           </ThemeProvider>
//         </ThemeSwitcherProvider>
//       </ReduxProviders>
//     </SessionProvider>
//   );
// };
// export default RootLayout;
