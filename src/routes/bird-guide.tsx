import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expShoebill from "@/assets/exp-shoebill.jpg";
import { SITE_CONFIG } from "@/lib/site-config";

export const Route = createFileRoute("/bird-guide")({
  head: () => ({
    meta: [
      { title: "Uganda Bird Guide — 1,000+ Species | Trek Wild Uganda" },
      {
        name: "description",
        content:
          "Uganda's top birding sites and signature species, from the shoebill stork to Albertine Rift endemics — Africa's single best birding destination.",
      },
      { property: "og:title", content: "Uganda Bird Guide — Trek Wild Uganda" },
      { property: "og:url", content: `${SITE_CONFIG.url}/bird-guide` },
    ],
    links: [{ rel: "canonical", href: `${SITE_CONFIG.url}/bird-guide` }],
  }),
  component: () => (
    <GuidePage
      eyebrow="For the Bird List"
      title={<>Over 1,000 species, <em className="italic text-gold">one country</em>.</>}
      intro="Uganda's bird list runs past 1,000 recorded species — more than Kenya and Tanzania combined, in a country roughly the size of the United Kingdom. It's not a side note to a safari here; for serious birders, it's the reason to come."
      heroImage={expShoebill}
      heroAlt="Shoebill stork in Uganda's papyrus wetlands"
      facts={[
        { label: "Recorded species", value: "1,000+" },
        { label: "Headline bird", value: "The shoebill stork" },
        { label: "Peak season", value: "November–April" },
        { label: "National bird", value: "Grey Crowned Crane" },
      ]}
      sections={[
        {
          title: "Why Uganda leads Africa for birding",
          body: "Uganda sits at the overlap of East and Central African bird zones, adds the Albertine Rift's unusually high endemism, and packs an exceptional range of habitat — lowland rainforest, savanna, papyrus wetland and Afro-alpine moorland — into a compact, accessible area. Few countries anywhere let you cover this much habitat diversity in a single two-week trip.",
        },
        {
          title: "Where to go for what",
          body: "Each region delivers a genuinely different bird list, which is why serious birding itineraries here move between several sites rather than settling on one.",
          checklist: [
            "Mabamba Swamp, near Lake Victoria — the classic shoebill stork canoe trip",
            "Bwindi Impenetrable — Albertine Rift endemics found nowhere else on Earth",
            "Semuliki — Congo-basin lowland species shared with Central Africa",
            "Kazinga Channel, Queen Elizabeth — pelicans, kingfishers and fish eagles",
            "Kidepo Valley — dry savanna specialists found nowhere else in Uganda",
            "Mount Elgon & Sipi Falls — highland forest species amid the coffee terraces",
          ],
        },
        {
          title: "Signature species to look for",
          body: "A shortlist of the birds that draw people to Uganda specifically, rather than birds you might see on any East African itinerary.",
          checklist: [
            "Shoebill stork — tall, still, and famously prehistoric-looking",
            "Grey Crowned Crane — Uganda's national bird, with an elaborate courtship dance",
            "Great Blue Turaco — Africa's largest turaco, common in western forests",
            "African Fish Eagle — the iconic call of every lakeshore and river",
            "Papyrus Gonolek — a wetland specialist found in papyrus swamp",
            "Shelley's Crimsonwing — one of Bwindi's rarer Albertine Rift endemics",
          ],
        },
      ]}
      faqs={[
        { q: "Is the shoebill sighting guaranteed?", a: "No wild sighting is ever guaranteed, but Mabamba Swamp and the Murchison Falls delta offer consistently good odds thanks to local guides' knowledge of current nesting and feeding areas." },
        { q: "Do I need a specialist birding guide?", a: "For a serious birding trip, yes — we pair birding itineraries with guides who specialise in identification and calls, distinct from a standard safari guide." },
        { q: "When is the best time for birding?", a: "Birding is strong year-round, but November–April adds Palearctic migrants to the resident species, giving the longest possible checklist." },
        { q: "Can birding be combined with gorilla trekking?", a: "Yes — Bwindi itself is a strong birding site, so a gorilla trekking trip there naturally doubles as birding time on the lower forest trails." },
      ]}
      related={[
        { name: "Birding Safaris", to: "/experiences/birding" },
        { name: "Semuliki", to: "/destinations/semuliki" },
        { name: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia" },
      ]}
    />
  ),
});
