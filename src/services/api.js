const API_KEY = "AIzaSyBeQKxCMRExRShOClX1Ei1VFdjdUI7wX98";
const GOOGLE_SEARCH_ENGINE_ID = "013521578711198445725:wxlfdxdhixc";

// Fallback curated image data for seamless UI demonstration when API quota/offline
const FALLBACK_IMAGES = {
  goal: [
    { title: "Mountain Peak Target & Inspiration", link: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" },
    { title: "Target Archery Focus", link: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?auto=format&fit=crop&w=1200&q=80" },
    { title: "Runner Crossing Finish Line", link: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80" },
    { title: "Climbing Towards Success", link: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80" }
  ],
  leadership: [
    { title: "Team Strategy Workshop", link: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" },
    { title: "Executive Leader Guidance", link: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" },
    { title: "Team Collaboration & Support", link: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" },
    { title: "Leading High Growth Engineering Team", link: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" }
  ],
  direction: [
    { title: "Compass & Map Navigation", link: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80" },
    { title: "Highway Road to the Horizon", link: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" },
    { title: "Directional Signpost", link: "https://images.unsplash.com/photo-1476514525535-ce74f45814d0?auto=format&fit=crop&w=1200&q=80" },
    { title: "Starry Night Path", link: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80" }
  ]
};

export async function fetchImages(keyword) {
  const normalizedKey = keyword.toLowerCase().trim();
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${GOOGLE_SEARCH_ENGINE_ID}&q=${encodeURIComponent(keyword)}&searchType=image&imgSize=medium`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items.map(item => ({
        title: item.title,
        link: item.link,
        contextLink: item.image?.contextLink || item.link
      }));
    }
  } catch (err) {
    console.warn(`[Api Service] Search for "${keyword}" fell back to curated dataset:`, err.message);
  }

  // Fallback to curated dataset or generated Unsplash set
  if (FALLBACK_IMAGES[normalizedKey]) {
    return FALLBACK_IMAGES[normalizedKey];
  }

  // Dynamic fallback for custom user query
  return [
    { title: `${keyword} - High Resolution View 1`, link: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80` },
    { title: `${keyword} - High Resolution View 2`, link: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80` },
    { title: `${keyword} - High Resolution View 3`, link: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80` },
    { title: `${keyword} - High Resolution View 4`, link: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80` }
  ];
}

export async function fetchDefaultPresetImages(presetTerms = ["goal", "leadership", "direction"]) {
  const results = await Promise.all(presetTerms.map(term => fetchImages(term)));
  return results.flat();
}
