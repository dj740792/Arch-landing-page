import { projects } from "@/_data/projects";

export default async function sitemap() {
    const baseUrl = "https://studio-oasis.com"
}

const staticRoutes = ["","/about", "/contact", "/work"].map((route)=>({
    url:`${baseUrl}${route}`,
    lastModified:new Data().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === ""? 1.0 :0.8,

}));

const projectRoutes = projects.map((project)=>({
    url:`${baseUrl}/work/${project.id}`,
    lastModified:new Data().toISOString(),
    changeFrequency:"monthly",
    priority:0.7,
}))

return[...staticRoutes,...projectRoutes]