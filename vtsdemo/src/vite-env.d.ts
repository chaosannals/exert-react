/// <reference types="vite/client" />

// 这些是由于 react-virtualized 的 vite 插件导致需要这里加。
declare module'*.svg'
declare module'*.scss' {
    const content: Record<string, string>;
    export default content;
}