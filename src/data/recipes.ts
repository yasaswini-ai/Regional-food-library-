import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'pesarattu',
    name: 'Pesarattu (Green Moong Crepe)',
    teluguName: 'పెసరట్టు',
    hindiName: 'पेसरट्टू (मूँग दाल चीला)',
    tamilName: 'பெசரட்டு (பச்சை பயறு தோசை)',
    category: 'Breakfast',
    heroImage: '/src/assets/images/dish_pesarattu_upma_1793770953286.jpg',
    shortDescription: 'Ancient, protein-packed whole green gram crepe native to the Telugu heartlands, prepared without fermentation.',
    culturalPhilosophy: 'Unlike South Indian rice-urad dosas, authentic Pesarattu uses unfermented whole green gram ground fresh with ginger and green chillies. Different districts and households celebrate distinct textures: from Vijayawada’s rich Upma-filled crepe to Guntur’s blistering crispy pan-roast.',
    variations: [
      {
        id: 'pesarattu-mla-upma',
        versionTitle: 'MLA Upma Pesarattu (Vijayawada / Godavari Coastal Style)',
        tagline: 'The iconic coastal Telugu breakfast pairing crispy whole-gram crepe with pillowy spiced semolina upma.',
        regionalLineage: {
          district: 'Krishna & East Godavari',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Created in MLA quarters in Hyderabad and popularized across coastal Telugu dhabas in Vijayawada and Rajahmundry as a wholesome, hearty morning meal for travelers and legislators.',
          traditionalVessel: 'Heavy Cast Iron Tawa & Brass Sauté Kadai',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 7,
          activeTimeMin: 35,
          passiveTimeMin: 240, // 4 hrs soaking
          techniqueComplexity: 'Moderate',
          justification: 'Requires managing two simultaneous culinary components: cooking a moist, non-sticky ginger-cashew Rava Upma, while calibrating high iron griddle temperature to spread unfermented whole-gram batter ultra-thin without tearing, finishing with a crisp envelope fold.',
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 25,
        spiceLevel: 3,
        ingredients: [
          { id: 'p1-1', name: 'Whole Green Moong Dal (Pesaralu)', amount: 1.5, unit: 'cups', category: 'lentil', notes: 'Soaked 4-6 hours' },
          { id: 'p1-2', name: 'Raw Rice (Biyyam)', amount: 2, unit: 'tbsp', category: 'grain', notes: 'Imparts crispness to unfermented batter' },
          { id: 'p1-3', name: 'Fresh Ginger (Allam)', amount: 2, unit: 'inch', category: 'aromatic' },
          { id: 'p1-4', name: 'Green Chillies (Pachi Mirchi)', amount: 4, unit: 'pieces', category: 'spice' },
          { id: 'p1-5', name: 'Bombay Rava (Semolina)', amount: 1, unit: 'cup', category: 'grain', notes: 'For the Upma filling' },
          { id: 'p1-6', name: 'Onions (Ullipayalu)', amount: 1, unit: 'cup', category: 'vegetable', notes: 'Finely minced' },
          { id: 'p1-7', name: 'Cumin Seeds (Jeelakarra)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'p1-8', name: 'Cashews (Jeedipappu)', amount: 12, unit: 'pieces', category: 'grain' },
          { id: 'p1-9', name: 'Desi Ghee & Groundnut Oil', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'p1-10', name: 'Fresh Curry Leaves', amount: 2, unit: 'sprigs', category: 'aromatic' },
          { id: 'p1-11', name: 'Rock Salt (Uppu)', amount: 1.5, unit: 'tsp', category: 'spice' },
        ],
        substitutions: [
          {
            original: 'Bombay Rava (Semolina / Wheat)',
            substitute: 'Roasted Coarse Rice Rava or Foxtail Millet (Korralu)',
            category: 'gluten',
            ratio: '1:1',
            culinaryEffect: 'Ensures 100% gluten-free preparation. Rice rava yields an equally tender, slightly grainier texture that absorbs the ginger tempering wonderfully.',
            authenticityNote: 'Millet and coarse broken rice upma are deeply rooted in rural Rayalaseema and coastal Andhra kitchens.'
          },
          {
            original: 'Desi Ghee',
            substitute: 'Cold-Pressed Groundnut (Peanut) Oil or Sesame Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan-friendly. Groundnut oil delivers a smoky, nutty aroma with a higher smoke point, giving the edges an extra rustic crackle.',
            authenticityNote: 'Cold-pressed wooden ghani groundnut oil is the native everyday fat of Telugu village homes.'
          },
          {
            original: 'Cashews',
            substitute: 'Roasted Split Peanuts or Fried Gram (Pappulu)',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Provides identical rich crunch in the upma filling while being allergy-conscious and budget-friendly.',
            authenticityNote: 'Peanuts are the quintessential local crop across Andhra Pradesh.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Wash whole green gram (pesaralu) and raw rice thoroughly. Soak in 4 cups of filtered water for 4 to 6 hours. Do not over-soak or discard the nutrient-rich skins.',
            timerSeconds: 14400,
            timerLabel: 'Soak Green Gram (4-6 Hours)',
            techniqueTip: 'Whole green moong with skin provides the signature grassy aroma and deep jade-golden coloration.'
          },
          {
            stepNumber: 2,
            instruction: 'Drain the soaked beans, reserving half a cup of soaking water. Grind in a wet grinder or blender with ginger, green chillies, and 1 tsp rock salt to a slightly coarse, flowing batter (like thick buttermilk, slightly thinner than dosa batter).',
            techniqueTip: 'Do not blend into a gummy baby-puree; a microscopic granular grit gives pesarattu its signature tawa crispness.'
          },
          {
            stepNumber: 3,
            instruction: 'Prepare the savory Upma: Heat 1.5 tbsp ghee in a pan. Splutter mustard seeds, cumin, split chana dal, cashews, ginger, and curry leaves. Add 2.5 cups water and salt; bring to a rolling boil.',
            timerSeconds: 180,
            timerLabel: 'Boil Upma Water (3 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Slowly stream in Bombay rava while whisking continuously to prevent lumps. Cover with lid and cook on low heat for 4 minutes until fluffy and soft. Turn off flame and keep warm.',
            timerSeconds: 240,
            timerLabel: 'Steam Cook Upma (4 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Heat a seasoned heavy cast iron tawa until water droplets dance and vaporize instantly. Lower flame slightly. Pour a large ladle of batter into the center and spread in concentric spirals into a thin 9-inch circle.',
            techniqueTip: 'Grease the tawa with a cut onion dipped in oil for a non-stick natural surface release.'
          },
          {
            stepNumber: 6,
            instruction: 'Immediately sprinkle finely minced onions, green chillies, and cumin seeds over the wet surface. Drizzle 1 tsp groundnut oil and ghee along the circumference. Press down gently with a flat spatula.',
            timerSeconds: 120,
            timerLabel: 'Roast Base (2 Mins)'
          },
          {
            stepNumber: 7,
            instruction: 'When the underside turns deep golden-russet, spread 3 tablespoons of steaming hot upma over one half of the crepe. Fold the other half over into a neat crescent envelope. Serve immediately with spicy ginger Allam Pachadi.',
            techniqueTip: 'Serve piping hot off the tawa; cold pesarattu loses its signature crispness.'
          }
        ],
        proTips: [
          'Never ferment Pesarattu batter! Fermenting turns it sour and rubbery.',
          'Adding 2 tablespoons of soaked raw rice prevents the batter from turning limp on the griddle.',
          'Always pair with sweet-and-spicy Andhra Allam Pachadi (ginger jaggery chutney).'
        ],
        servingSuggestions: ['Fresh Allam Pachadi (Ginger Chutney)', 'Kobbari Chutney (Coconut Chutney)', 'Filter Coffee'],
        whyThisDiffers: 'Differs from standard pesarattu by incorporating the moist semolina upma center, transforming a light snack into a substantial meal with textural contrast between crisp crepe and melt-in-mouth filling.'
      },
      {
        id: 'pesarattu-guntur-crisp',
        versionTitle: 'Guntur Crispy Allam Pesarattu (Guntur District / Family Farm Style)',
        tagline: 'Rustic, unadorned, blistered whole moong crepe crowned with raw onions, roasted cumin, and fiery ginger.',
        regionalLineage: {
          district: 'Guntur & Palnadu',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Traditional farmer breakfast in the chillies-rich Guntur belt, where breakfast must be rapid, fiery, and sustain high physical endurance without lengthy cooking.',
          traditionalVessel: 'Seasoned Cast Iron Tawa',
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 4,
          activeTimeMin: 15,
          passiveTimeMin: 180,
          techniqueComplexity: 'Low',
          justification: 'Only 4 straightforward steps with no separate fillings or complex emulsions. The batter is ground in 5 minutes, ladled directly onto a hot tawa, topped with raw aromatics, and flipped once. Highly forgiving for home cooks.',
        },
        servings: 3,
        prepTimeMin: 10,
        cookTimeMin: 15,
        spiceLevel: 4,
        ingredients: [
          { id: 'p2-1', name: 'Whole Green Moong Dal', amount: 1.5, unit: 'cups', category: 'lentil' },
          { id: 'p2-2', name: 'Guntur Green Chillies', amount: 5, unit: 'pieces', category: 'spice' },
          { id: 'p2-3', name: 'Fresh Ginger Root', amount: 2, unit: 'inch', category: 'aromatic' },
          { id: 'p2-4', name: 'Shallots or Red Onion', amount: 1, unit: 'cup', category: 'vegetable', notes: 'Finely diced' },
          { id: 'p2-5', name: 'Whole Cumin Seeds', amount: 2, unit: 'tsp', category: 'spice' },
          { id: 'p2-6', name: 'Cold-Pressed Groundnut Oil', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'p2-7', name: 'Salt', amount: 1.25, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Guntur Green Chillies',
            substitute: 'Serrano or Jalapeño peppers',
            category: 'spice',
            ratio: '1:1',
            culinaryEffect: 'Provides milder heat with juicy pepper aroma while keeping vibrant green flecks.',
            authenticityNote: 'Adjust spice seeds depending on family heat tolerance.'
          },
          {
            original: 'Shallots',
            substitute: 'Spring onion whites or sweet yellow onions',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Sweeter caramelization under the hot iron tawa.',
            authenticityNote: 'Shallots (chinna ullipayalu) provide the traditional pungent crunch.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak whole green gram for 3 hours. Drain and blend coarsely with ginger, green chillies, cumin seeds, and salt with just enough water to form a smooth pouring batter.',
            timerSeconds: 10800,
            timerLabel: 'Soak Moong (3 Hours)'
          },
          {
            stepNumber: 2,
            instruction: 'Heat cast iron tawa to medium-high heat. Ladle batter and spread outwards into an even circle.',
            techniqueTip: 'Listen for the sizzle; if it does not hiss immediately, the pan is too cold.'
          },
          {
            stepNumber: 3,
            instruction: 'Generously press finely chopped onions and extra cumin seeds onto the wet top. Drizzle groundnut oil around the perimeter.',
            timerSeconds: 90,
            timerLabel: 'Roast First Side (1.5 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Flip and press for 30 seconds so the onions sear and caramelize against the iron griddle. Flip back and fold. Serve crisp.',
            timerSeconds: 30,
            timerLabel: 'Caramelize Onions (30 Secs)'
          }
        ],
        proTips: [
          'In Guntur, flipping the pesarattu to sear the onions directly against the hot metal is a beloved signature technique.',
          'Use wooden cold-pressed groundnut oil for the nostalgic rustic aroma.'
        ],
        servingSuggestions: ['Fiery Guntur Allam Pachadi', 'Spicy Palli (Peanut) Chutney'],
        whyThisDiffers: 'Unlike the MLA version, this does not have upma. Instead, it flips the onions onto the hot iron tawa for smoky, sweet caramelization and takes half the preparation time.'
      },
      {
        id: 'pesarattu-rayalaseema',
        versionTitle: 'Rayalaseema Kadapa Pesarattu (with Soaked Rice & Fenugreek)',
        tagline: 'Deeply toasted, golden-red hued moong crepe with fenugreek aroma and robust crunch.',
        regionalLineage: {
          district: 'Kadapa & Kurnool',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Rayalaseema households balance the cooling properties of green moong with warming fenugreek seeds and local red chillies, yielding an exceptionally fragrant batter.',
          traditionalVessel: 'Thick Iron Tawa',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 5,
          activeTimeMin: 25,
          passiveTimeMin: 300,
          techniqueComplexity: 'Moderate',
          justification: 'Involves balancing an exact 4:1 whole moong to parboiled rice ratio with soaked methi seeds. Requires careful flame calibration so the fenugreek perfumes the crepe without scorching into bitterness.',
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 20,
        spiceLevel: 3,
        ingredients: [
          { id: 'p3-1', name: 'Whole Green Moong', amount: 1.5, unit: 'cups', category: 'lentil' },
          { id: 'p3-2', name: 'Sona Masoori or Idli Rice', amount: 0.35, unit: 'cup', category: 'grain' },
          { id: 'p3-3', name: 'Fenugreek Seeds (Menthulu)', amount: 1, unit: 'tsp', category: 'spice', notes: 'Soaked with dal' },
          { id: 'p3-4', name: 'Byadagi or Guntur Red Chillies', amount: 3, unit: 'pieces', category: 'spice' },
          { id: 'p3-5', name: 'Ginger & Garlic cloves', amount: 4, unit: 'cloves', category: 'aromatic' },
          { id: 'p3-6', name: 'Cold-pressed Sesame Oil or Ghee', amount: 3, unit: 'tbsp', category: 'oil' }
        ],
        substitutions: [
          {
            original: 'Fenugreek Seeds',
            substitute: 'Fenugreek Powder (Kasoori methi dry crushed)',
            category: 'spice',
            ratio: '0.5 tsp',
            culinaryEffect: 'Provides gentle herbal maple undertone without risking bitter whole seed spots.',
            authenticityNote: 'Soaked whole methi seeds are traditional in Rayalaseema.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak green moong, raw rice, and fenugreek seeds together for 5 hours.',
            timerSeconds: 18000,
            timerLabel: 'Soak Moong & Methi (5 Hours)'
          },
          {
            stepNumber: 2,
            instruction: 'Grind with dry red chillies, garlic, ginger, and cumin into a medium-smooth batter with velvety body.',
            techniqueTip: 'Garlic is a distinct Rayalaseema addition that elevates the savoury depth.'
          },
          {
            stepNumber: 3,
            instruction: 'Rest the batter for 20 minutes to allow the starches to relax.',
            timerSeconds: 1200,
            timerLabel: 'Rest Batter (20 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Spread thinly on medium-hot cast iron tawa and roast with sesame oil until deeply reddish-golden.',
            timerSeconds: 150,
            timerLabel: 'Roast (2.5 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Fold and serve with roasted gram chutney and spicy tomato-onion pacchadi.',
            techniqueTip: 'Do not flip; let the top cook through steam while the base crystallizes.'
          }
        ],
        proTips: [
          'The addition of fenugreek aids digestion of whole green gram legumes.',
          'Using garlic in the batter is characteristic of Rayalaseema home kitchens.'
        ],
        servingSuggestions: ['Pappula Podi (Gunpowder with Ghee)', 'Tomato Onion Pachadi'],
        whyThisDiffers: 'Distinguished by the inclusion of fenugreek seeds and garlic in the batter, creating a fragrant reddish crust unique to the Rayalaseema hinterlands.'
      }
    ]
  },
  {
    id: 'pulihora',
    name: 'Pulihora (Tamarind & Citrus Tempered Rice)',
    teluguName: 'పులిహోర / చింతపండు పులిహోర',
    hindiName: 'इमली / नींबू चावल (पुलिहोरा)',
    tamilName: 'புளியோதரை / புளி சாதம்',
    category: 'Rice Specialties',
    heroImage: '/src/assets/images/dish_tamarind_pulihora_1793770955389.jpg',
    shortDescription: 'Sacred festive and temple rice infused with tamarind, roasted spices, crunchy legumes, and mustard aroma.',
    culturalPhilosophy: 'Pulihora is the soul of auspicious celebrations across South India. Different traditions diverge dramatically in their souring medium and spicing: Tirupati temple masters simmer tamarind paste (Gojju) with fenugreek-mustard powder; Rayalaseema homes prepare tangy fresh lemon rice; while coastal Godavari families grind raw pungent mustard paste (Ava Pulihora).',
    variations: [
      {
        id: 'pulihora-temple-tamarind',
        versionTitle: 'Chintapandu Pulihora (Tirupati Temple Prasadam Style)',
        tagline: 'The revered sacred temple style with thick slow-simmered tamarind reduction (Gojju) and fragrant sesame oil tadka.',
        regionalLineage: {
          district: 'Tirupati & Chittoor',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Distributed as sacred prasadam at Sri Venkateswara Temple in Tirumala, celebrated for its layered tangy-sour notes, crunchy peanuts, and lingering aroma of turmeric and hing.',
          traditionalVessel: 'Heavy Brass Urli / Bronze Pan',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 35,
          passiveTimeMin: 40,
          techniqueComplexity: 'Moderate',
          justification: 'Involves multi-stage reduction of sour tamarind pulp ("Pulihora Gojju") infused with sesame oil, turmeric, and dry-roasted fenugreek-mustard powder until oil separates cleanly. The rice must be cooked with exact water ratio so individual grains remain intact when warm pulp is hand-folded.',
        },
        servings: 6,
        prepTimeMin: 20,
        cookTimeMin: 30,
        spiceLevel: 3,
        ingredients: [
          { id: 'pul1-1', name: 'Aged Sona Masoori Rice', amount: 2, unit: 'cups', category: 'grain', notes: 'Grains must be fluffy and separate' },
          { id: 'pul1-2', name: 'Aged Dark Tamarind (Chintapandu)', amount: 100, unit: 'grams', category: 'vegetable', notes: 'Soaked in warm water and extracted' },
          { id: 'pul1-3', name: 'Cold-Pressed Sesame (Gingelly) Oil', amount: 5, unit: 'tbsp', category: 'oil' },
          { id: 'pul1-4', name: 'Raw Peanuts (Verusenaga Pappu)', amount: 0.5, unit: 'cup', category: 'grain' },
          { id: 'pul1-5', name: 'Chana Dal & Urad Dal', amount: 2, unit: 'tbsp', category: 'lentil' },
          { id: 'pul1-6', name: 'Mustard Seeds (Aavalu)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'pul1-7', name: 'Fenugreek Seeds (Menthulu)', amount: 0.5, unit: 'tsp', category: 'spice', notes: 'Dry roasted and powdered' },
          { id: 'pul1-8', name: 'Turmeric Powder (Pasupu)', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'pul1-9', name: 'Asafoetida (Inguva)', amount: 0.5, unit: 'tsp', category: 'spice' },
          { id: 'pul1-10', name: 'Guntur Dry Red & Green Chillies', amount: 8, unit: 'pieces', category: 'spice' },
          { id: 'pul1-11', name: 'Fresh Curry Leaves', amount: 4, unit: 'sprigs', category: 'aromatic' },
          { id: 'pul1-12', name: 'Jaggery (Bellam)', amount: 1, unit: 'tbsp', category: 'spice', notes: 'Balances acidity' },
        ],
        substitutions: [
          {
            original: 'Aged Tamarind (Chintapandu)',
            substitute: 'Concentrated Kokum extract or Green Raw Mango Puree',
            category: 'souring',
            ratio: '1:1 by tartness level',
            culinaryEffect: 'Delivers bright fruity tang. Raw mango produces "Mamidikaya Pulihora", an equally authentic seasonal Telugu variant.',
            authenticityNote: 'Raw mango pulihora is an authentic Ugadi festive tradition.'
          },
          {
            original: 'Asafoetida (Inguva containing wheat flour)',
            substitute: 'Pure gluten-free compounded Hing or crushed celery seed/garlic-free seasoning',
            category: 'gluten',
            ratio: '0.25 tsp',
            culinaryEffect: 'Provides vital pungent umami aroma without gluten cross-contamination.',
            authenticityNote: 'Temples use pure rock hing dissolved in water.'
          },
          {
            original: 'Cold-Pressed Sesame Oil',
            substitute: 'Groundnut (Peanut) Oil or Desi Ghee',
            category: 'oil',
            ratio: '1:1',
            culinaryEffect: 'Ghee creates a rich, festive gloss while peanut oil keeps it authentic.',
            authenticityNote: 'Sesame oil is the traditional sacred fat of Tirupati temple kitchen.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Cook 2 cups of aged Sona Masoori rice with 3.75 cups water, 0.5 tsp turmeric, 1 tsp salt, and 1 tbsp sesame oil until grains are distinct and firm (not mushy). Spread on a wide brass thali or stainless steel platter to cool.',
            timerSeconds: 1200,
            timerLabel: 'Cook & Cool Rice (20 Mins)',
            techniqueTip: 'Coating warm grains with oil seals the starch, preventing the rice from becoming clumped when sour paste is introduced.'
          },
          {
            stepNumber: 2,
            instruction: 'Extract thick tamarind pulp from 100g soaked tamarind using 1.5 cups hot water. Strain out all seeds and fibers.',
            techniqueTip: 'Thick pulp ensures you don’t need hours of evaporation.'
          },
          {
            stepNumber: 3,
            instruction: 'In a heavy bronze or stainless steel pan, simmer tamarind pulp with turmeric, slit green chillies, 1 tbsp jaggery, salt, and 2 tbsp sesame oil on medium flame for 12-15 minutes until it thickens to a glossy paste (pulihora gojju) and oil separates at borders.',
            timerSeconds: 900,
            timerLabel: 'Simmer Tamarind Gojju (15 Mins)',
            techniqueTip: 'The simmering of green chillies directly in sour tamarind mellows their bite and infuses the pulp with capsicum warmth.'
          },
          {
            stepNumber: 4,
            instruction: 'Dry roast 0.5 tsp fenugreek seeds and 0.5 tsp mustard seeds until aromatic and slightly darkened. Cool and crush in a mortar into a fine fragrant powder (Menthula Podi). Stir half into the simmering gojju.',
            timerSeconds: 180,
            timerLabel: 'Roast Spices (3 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Prepare the crunchy temple tadka: Heat 3 tbsp sesame oil in a pan. Fry raw peanuts on low flame until crunchy and golden. Add split chana dal, urad dal, mustard seeds, dry red chillies, asafoetida, and curry leaves until sizzling.',
            timerSeconds: 240,
            timerLabel: 'Fry Peanuts & Dal (4 Mins)',
            techniqueTip: 'Slow-frying peanuts on gentle heat ensures they remain crisp for days rather than softening.'
          },
          {
            stepNumber: 6,
            instruction: 'Fold the prepared Tamarind Gojju and sizzling tempering into the cooled rice using wide, gentle sweeping motions with flat wooden spatula. Let rest for at least 1 hour before serving to let flavours mature.',
            timerSeconds: 3600,
            timerLabel: 'Flavor Maturation Rest (1 Hour)',
            techniqueTip: 'Pulihora tastes significantly better after 2 to 4 hours as the rice absorbs the tempering oils and sourness.'
          }
        ],
        proTips: [
          'Temple pulihora uses aged dark tamarind (paatha chintapandu), which has mellow acidity and deep caramelized umami.',
          'Always cool the rice completely before mixing to prevent starch breakage.',
          'The prepared tamarind gojju keeps in an airtight glass jar for up to 3 months without refrigeration.'
        ],
        servingSuggestions: ['Appadalu (Crisp Papad)', 'Plain Curd (Perugu)', 'Majjiga (Spiced Buttermilk)'],
        whyThisDiffers: 'Differs from home styles through the long reduction of tamarind paste with jaggery and roasted fenugreek powder, giving the signature Tirupati temple flavour profile.'
      },
      {
        id: 'pulihora-nimmakaya',
        versionTitle: 'Nimmakaya Pulihora (Rayalaseema Lemon Rice - Family Quick Style)',
        tagline: 'Light, zesty, golden turmeric rice tempered with crunchy peanuts, ginger, and fresh lime juice.',
        regionalLineage: {
          district: 'Kurnool & Anantapur',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'The everyday family comfort food whipped up for weekend journeys, school lunchboxes, and sudden guests across Rayalaseema.',
          traditionalVessel: 'Cast Kadai',
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 3,
          activeTimeMin: 12,
          passiveTimeMin: 15,
          techniqueComplexity: 'Low',
          justification: 'Only 3 simple steps: cooling cooked rice, sizzling a 4-minute mustard-chana-peanut tempering in groundnut oil, and tossing gently with fresh lime juice. No reduction, spice roasting, or lengthy resting required.',
        },
        servings: 4,
        prepTimeMin: 5,
        cookTimeMin: 12,
        spiceLevel: 2,
        ingredients: [
          { id: 'pul2-1', name: 'Steamed Rice', amount: 3, unit: 'cups', category: 'grain', notes: 'Room temperature' },
          { id: 'pul2-2', name: 'Fresh Lemons or Limes', amount: 3, unit: 'pieces', category: 'vegetable', notes: 'Juiced' },
          { id: 'pul2-3', name: 'Groundnut Oil', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'pul2-4', name: 'Raw Peanuts', amount: 0.35, unit: 'cup', category: 'grain' },
          { id: 'pul2-5', name: 'Mustard Seeds', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'pul2-6', name: 'Bengal Gram (Chana Dal)', amount: 1, unit: 'tbsp', category: 'lentil' },
          { id: 'pul2-7', name: 'Green Chillies & Minced Ginger', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'pul2-8', name: 'Turmeric Powder', amount: 0.75, unit: 'tsp', category: 'spice' },
          { id: 'pul2-9', name: 'Curry Leaves & Hing', amount: 1, unit: 'sprig', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Fresh Lemon / Lime',
            substitute: 'Fresh Usirikaya (Indian Gooseberry / Amla puree)',
            category: 'souring',
            ratio: '0.5 cup grated amla',
            culinaryEffect: 'Creates Usirikaya Pulihora, deeply auspicious for Karthika Masam with immune-boosting astringent tang.',
            authenticityNote: 'Celebrated Telugu winter seasonal recipe.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Spread cooked rice on a platter. Sprinkle salt and fresh lemon juice over the rice; gently fluff with a fork.',
            techniqueTip: 'Never heat lemon juice on direct fire, as heat denatures citric acid and introduces bitterness.'
          },
          {
            stepNumber: 2,
            instruction: 'Heat groundnut oil in a pan. Sauté peanuts and chana dal until golden. Add mustard seeds, ginger, slit green chillies, curry leaves, hing, and turmeric. Sizzle for 60 seconds.',
            timerSeconds: 240,
            timerLabel: 'Sauté Tempering (4 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Pour sizzling aromatic tempering directly over the lemon rice. Fold gently until every grain shines luminous yellow.',
            techniqueTip: 'Ready to serve immediately or pack for travel.'
          }
        ],
        proTips: [
          'Add a pinch of sugar or jaggery to round out the sharp lemon acidity.',
          'Always use room temperature rice so it does not turn mushy.'
        ],
        servingSuggestions: ['Potato Fry (Bangaladumpa Vepudu)', 'Yogurt'],
        whyThisDiffers: 'Uses fresh lemon juice rather than tamarind pulp, resulting in a bright, clean, sunny citrus flavour with minimal cooking time.'
      },
      {
        id: 'pulihora-ava-mustard',
        versionTitle: 'Ava Pulihora (Coastal Andhra Raw Mustard Paste Style - Rajahmundry)',
        tagline: 'Pungent, aristocratic Andhra delicacy where freshly crushed mustard paste infuses slow-cooked tamarind rice.',
        regionalLineage: {
          district: 'East & West Godavari',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'The prized centerpiece of Godavari wedding feasts and festive Sankranti banquets, celebrated for the sinus-clearing warmth of stone-ground raw mustard.',
          traditionalVessel: 'Brass Thali & Heavy Bronze Kadai',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 30,
          techniqueComplexity: 'Moderate',
          justification: 'Demands precise thermal discipline: raw mustard seeds are ground with a drop of water into pungent "Ava pindi". This paste must only be folded into the tamarind rice after it cools to lukewarm. If introduced into piping hot rice, the myrosinase enzyme is scalded, turning the entire pot irreversibly bitter.',
        },
        servings: 5,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 4,
        ingredients: [
          { id: 'pul3-1', name: 'Raw Brown Mustard Seeds (Aavalu)', amount: 2.5, unit: 'tbsp', category: 'spice', notes: 'Stone ground fresh' },
          { id: 'pul3-2', name: 'Sona Masoori Rice', amount: 2, unit: 'cups', category: 'grain' },
          { id: 'pul3-3', name: 'Tamarind Pulp', amount: 80, unit: 'grams', category: 'vegetable' },
          { id: 'pul3-4', name: 'Cold-pressed Sesame Oil', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'pul3-5', name: 'Green Chillies', amount: 6, unit: 'pieces', category: 'spice' },
          { id: 'pul3-6', name: 'Peanuts & Roasted Chana Dal', amount: 0.5, unit: 'cup', category: 'grain' },
          { id: 'pul3-7', name: 'Turmeric, Salt, and Curry Leaves', amount: 1, unit: 'tbsp', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Brown Mustard Seeds',
            substitute: 'Yellow Mustard Seeds or Wasabi / Horseradish root pinch',
            category: 'spice',
            ratio: '1:1',
            culinaryEffect: 'Yellow mustard produces a softer, less pungent sinus kick while retaining bright color.',
            authenticityNote: 'Godavari cooks insist on small pungent brown/black mustard.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Cook rice until grains are firm. Spread on a brass tray and drizzle 1 tbsp raw sesame oil and turmeric.',
            techniqueTip: 'Raw sesame oil preserves moisture in the grains.'
          },
          {
            stepNumber: 2,
            instruction: 'Simmer tamarind extract with green chillies and salt until concentrated into thick reduction.',
            timerSeconds: 600,
            timerLabel: 'Simmer Tamarind (10 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Blend raw mustard seeds with 1 tbsp water in a small mortar until it forms a creamy, pungent yellow-brown paste (Ava mudda).',
            techniqueTip: 'Grind just before use; standing too long dissipates the volatile oils.'
          },
          {
            stepNumber: 4,
            instruction: 'Fold the cooked tamarind paste into the rice. Let the mixture cool until barely warm to the touch (critical step!).',
            timerSeconds: 900,
            timerLabel: 'Cool to Warm (15 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Blend the raw mustard paste with 1 tsp sesame oil and gently fold throughout the lukewarm rice.',
            techniqueTip: 'Thermal check: if your finger feels heat, wait longer before adding mustard!'
          },
          {
            stepNumber: 6,
            instruction: 'Pour the hot fried peanut and dal tempering over the rice. Cover and let rest for 30 minutes before serving.',
            timerSeconds: 1800,
            timerLabel: 'Rest & Infuse (30 Mins)'
          }
        ],
        proTips: [
          'The mustard paste releases an intoxicating wasabi-like pungency that cuts through the rich tamarind.',
          'Always use unrefined cold-pressed gingelly oil for authentic coastal depth.'
        ],
        servingSuggestions: ['Vadiyalu (Sun-dried Lentil Crisps)', 'Gutti Vankaya Curry'],
        whyThisDiffers: 'Features a raw, stone-ground mustard paste that delivers a distinctive pungent, sinus-clearing warmth missing in standard temple or lemon varieties.'
      }
    ]
  },
  {
    id: 'biryani',
    name: 'Biryani (Regional Royal Heritage)',
    teluguName: 'దమ్ బిర్యానీ / పులావ్',
    hindiName: 'दम बिरयानी / पुलाव',
    tamilName: 'தம் பிரியாணி',
    category: 'Rice Specialties',
    heroImage: '/src/assets/images/dish_dum_biryani_1793770954048.jpg',
    shortDescription: 'The pinnacle of Indian culinary artistry: layered long-grain rice, aromatic marinades, and sealed steam maturation.',
    culturalPhilosophy: 'Biryani is not a single dish, but a canvas of princely dynasties and regional soil. Hyderabadi masters swear by the high-stakes raw-meat Dum method; Rayalaseema military houses celebrate robust country-fowl one-pot pulaos; while Awadhi chefs in Lucknow extract silky bone stocks (Yakhni) for subtle perfume.',
    variations: [
      {
        id: 'biryani-hyderabadi-dum',
        versionTitle: 'Hyderabadi Kacchi Gosht Dum Biryani (Nizami Royal Heritage)',
        tagline: 'The undisputed royal icon: raw spiced meat cooked simultaneously with 70% parboiled basmati rice under a hermetic dough seal.',
        regionalLineage: {
          district: 'Hyderabad & Deccan',
          region: 'Telugu',
          state: 'Telangana',
          heritageContext: 'Refined in the royal royal kitchens of the Asaf Jahi Nizams of Hyderabad, blending Persian steam technique (Dum Pukht) with fiery Deccani red chillies and sour curd marinades.',
          traditionalVessel: 'Heavy Copper Handi (Deg) with Dough Seal',
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 9,
          activeTimeMin: 60,
          passiveTimeMin: 480, // Overnight marinade + dum
          techniqueComplexity: 'Artisanal',
          justification: 'The supreme test of an Indian chef. Raw meat must be tenderized with exact proportions of raw green papaya and yogurt so it cooks through at the exact same rate as 70% parboiled rice. The handi is sealed airtight with whole wheat dough, and flame intensity must transition from high heat (to generate internal steam pressure) to a cast-iron tawa buffer for gentle heat circulation without burning the bottom layer.',
        },
        servings: 6,
        prepTimeMin: 45,
        cookTimeMin: 55,
        spiceLevel: 4,
        ingredients: [
          { id: 'bir1-1', name: 'Aged Extra-Long Basmati Rice (2+ years aged)', amount: 3, unit: 'cups', category: 'grain' },
          { id: 'bir1-2', name: 'Tender Lamb / Mutton or Chicken', amount: 800, unit: 'grams', category: 'protein' },
          { id: 'bir1-3', name: 'Raw Green Papaya Paste (Tenderizer)', amount: 2, unit: 'tbsp', category: 'fruit' as any },
          { id: 'bir1-4', name: 'Hung Curd / Thick Yogurt', amount: 1.25, unit: 'cups', category: 'dairy' },
          { id: 'bir1-5', name: 'Golden Fried Onions (Birista)', amount: 2, unit: 'cups', category: 'vegetable' },
          { id: 'bir1-6', name: 'Kashmir Saffron soaked in warm milk', amount: 0.5, unit: 'tsp', category: 'spice' },
          { id: 'bir1-7', name: 'Shahi Jeera (Caraway Seeds)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'bir1-8', name: 'Whole Spices (Cardamom, Mace, Cloves, Cinnamon, Star Anise)', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'bir1-9', name: 'Ginger-Garlic Paste', amount: 3, unit: 'tbsp', category: 'aromatic' },
          { id: 'bir1-10', name: 'Desi Ghee', amount: 5, unit: 'tbsp', category: 'dairy' },
          { id: 'bir1-11', name: 'Fresh Mint & Cilantro leaves', amount: 1, unit: 'bunch', category: 'aromatic' },
          { id: 'bir1-12', name: 'Whole Wheat Flour (Atta)', amount: 1, unit: 'cup', category: 'grain', notes: 'For sealing lid' },
        ],
        substitutions: [
          {
            original: 'Mutton / Lamb',
            substitute: 'Baby Jackfruit (Kathal) or Marinated Paneer / Portobello',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Raw green jackfruit replicates the stringy fiber and savory juice absorption of mutton, creating authentic Vegetarian Jackfruit Dum Biryani.',
            authenticityNote: 'Kathal Biryani has celebrated status in Awadh and Deccan traditions.'
          },
          {
            original: 'Hung Curd (Dairy)',
            substitute: 'Cashew-Almond Cream with lemon juice',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Replicates the tangy acidity and rich emulsion of curd without dairy curdling.',
            authenticityNote: 'Cashews are widely used across Deccani royal sauces.'
          },
          {
            original: 'Desi Ghee',
            substitute: 'Cold-pressed Coconut or Neutral Rice Bran Oil infused with cardamom',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Lighter mouthfeel with gentle aromatic finish.',
            authenticityNote: 'Ghee remains the traditional standard for Nizami richness.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Marinate raw meat with raw papaya paste, ginger-garlic paste, red chilli powder, turmeric, garam masala, hung curd, half the golden fried onions, crushed mint, coriander, and salt. Refrigerate for at least 4 to 8 hours.',
            timerSeconds: 14400,
            timerLabel: 'Tenderize Marinade (4-8 Hours)',
            techniqueTip: 'Raw green papaya contains papain, which breaks tough collagen fibers in red meat.'
          },
          {
            stepNumber: 2,
            instruction: 'Soak aged extra-long grain basmati rice in cold water for 45 minutes. Drain gently without snapping grains.',
            timerSeconds: 2700,
            timerLabel: 'Soak Basmati (45 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Bring 4 liters of water to a vigorous boil with whole cardamom, cloves, cinnamon, bay leaf, shahi jeera, and generous salt (water should taste as salty as seawater).',
            timerSeconds: 480,
            timerLabel: 'Boil Aromatics (8 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Add soaked rice. Parboil until precisely 70% cooked (grain has a firm chalky center when pressed between two fingers). Drain swiftly in a colander.',
            timerSeconds: 300,
            timerLabel: 'Parboil Rice 70% (5 Mins)',
            techniqueTip: '70% cook is essential; any softer and the rice will turn mushy during the 40-minute steam dum.'
          },
          {
            stepNumber: 5,
            instruction: 'Spread the marinated raw meat evenly across the bottom of a heavy copper or cast-iron handi. Drizzle 2 tbsp ghee over the meat.',
            techniqueTip: 'Packing the meat in an even flat layer ensures uniform steam circulation.'
          },
          {
            stepNumber: 6,
            instruction: 'Layer the hot drained basmati rice gently over the meat without pressing down. Crown with saffron milk, remaining golden onions, fresh mint, coriander, kewra water, and 3 tbsp melted ghee.',
            techniqueTip: 'Rice must remain loose to let rising steam percolate upward.'
          },
          {
            stepNumber: 7,
            instruction: 'Roll whole wheat flour dough into a long coil and press onto the rim of the pot. Press the lid firmly over the dough to form a hermetic steam seal.',
            techniqueTip: 'Listen for whistling steam; patch any leak immediately with moist dough.'
          },
          {
            stepNumber: 8,
            instruction: 'Cook on high flame for 10 minutes to generate internal steam pressure. Then place a heavy cast-iron tawa underneath the handi and cook on gentle low flame for 35 minutes.',
            timerSeconds: 2700,
            timerLabel: 'Dum Cooking (45 Mins Total)',
            techniqueTip: 'The tawa prevents scorching by converting direct flame into broad radiant heat.'
          },
          {
            stepNumber: 9,
            instruction: 'Turn off the heat. Let the handi rest unopened for 15 minutes. Cut open the dough seal at the dining table and spoon vertically from bottom to top so each portion gets tender meat, spiced orange rice, and pearl-white grains.',
            timerSeconds: 900,
            timerLabel: 'Rest Dum (15 Mins)'
          }
        ],
        proTips: [
          'Never stir biryani while serving! Scoop vertically with a flat saucer to keep basmati strands unbroken.',
          'The meat juices at the bottom cook the parboiled rice from below via aromatic steam.'
        ],
        servingSuggestions: ['Mirchi ka Salan (Hyderabadi Chilli Gravy)', 'Burani Raita (Garlic Spiced Yogurt)'],
        whyThisDiffers: 'Differs radically from Pulao and Pakki Biryani because raw meat is layered directly with parboiled rice and cooked entirely inside the sealed pot without pre-frying the meat.'
      },
      {
        id: 'biryani-rayalaseema-military',
        versionTitle: 'Rayalaseema Natu Kodi Pulao (Andhra Military / Seema Style)',
        tagline: 'Fiery, rustic country chicken pulao simmered in brass vessels with stone-ground shallot masala and short-grain Seeraga Samba rice.',
        regionalLineage: {
          district: 'Kurnool & Kadapa',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Born in legendary military messes and rustic hunting lodges of Rayalaseema, featuring indigenous free-range country chicken (natu kodi) and potent black pepper.',
          traditionalVessel: 'Heavy Brass Deg / Urli',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 40,
          passiveTimeMin: 20,
          techniqueComplexity: 'Moderate',
          justification: 'Country chicken has tough, muscular fibers that demand continuous braising with stone-ground aromatics before rice is incorporated. Liquid-to-rice ratios must be calibrated dynamically based on meat juices released.',
        },
        servings: 5,
        prepTimeMin: 25,
        cookTimeMin: 45,
        spiceLevel: 5,
        ingredients: [
          { id: 'bir2-1', name: 'Country Chicken (Natu Kodi) with bones', amount: 750, unit: 'grams', category: 'protein' },
          { id: 'bir2-2', name: 'Seeraga Samba / Chitti Muthyalu Rice', amount: 2.5, unit: 'cups', category: 'grain' },
          { id: 'bir2-3', name: 'Small Shallots (Chinna Ullipayalu)', amount: 1.5, unit: 'cups', category: 'vegetable' },
          { id: 'bir2-4', name: 'Guntur Green Chillies', amount: 8, unit: 'pieces', category: 'spice' },
          { id: 'bir2-5', name: 'Groundnut Oil and Ghee', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'bir2-6', name: 'Black Peppercorns & Cloves', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'bir2-7', name: 'Fresh Coriander and Mint Paste', amount: 0.5, unit: 'cup', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Country Chicken (Natu Kodi)',
            substitute: 'Broiler chicken or Button Mushrooms with Jackfruit chunks',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Reduces cooking time by 20 minutes; mushrooms release rich moisture and deep earthy savory flavor.',
            authenticityNote: 'Country fowl provides authentic Seema toothsome chew.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Grind shallots, ginger, garlic, cloves, cinnamon, black pepper, and green chillies into a coarse green spice paste.',
            techniqueTip: 'Stone grinding releases natural oils that ground powder cannot replicate.'
          },
          {
            stepNumber: 2,
            instruction: 'Heat oil and ghee in a heavy vessel. Sauté onions and spice paste until raw aroma dissipates and oil separates.',
            timerSeconds: 360,
            timerLabel: 'Bhunao Masala (6 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Add country chicken pieces, turmeric, and salt. Sear on high heat for 8 minutes to lock in juices.',
            timerSeconds: 480,
            timerLabel: 'Sear Country Chicken (8 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Add 1 cup water, cover, and simmer for 20 minutes until chicken is 80% tender.',
            timerSeconds: 1200,
            timerLabel: 'Braise Chicken (20 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Add washed short-grain Seeraga Samba rice and hot water (1:1.75 ratio considering braise liquid). Bring to a rolling boil.',
            timerSeconds: 300,
            timerLabel: 'Boil with Rice (5 Mins)'
          },
          {
            stepNumber: 6,
            instruction: 'Cover with tight lid and slow steam on low heat for 12 minutes until all moisture is absorbed into the fragrant pearls of rice.',
            timerSeconds: 720,
            timerLabel: 'Slow Steam (12 Mins)'
          }
        ],
        proTips: [
          'Seeraga Samba (Chitti Muthyalu) rice absorbs chicken broth deeply compared to basmati.',
          'Do not reduce the black pepper; it provides the signature military mess warmth.'
        ],
        servingSuggestions: ['Gongura Pachadi', 'Spicy Onion-Cucumber Raita'],
        whyThisDiffers: 'Cooked as a single-pot rustic pulao using short-grain aromatic rice rather than layered long-grain basmati, delivering an intensely savory, spicy broth infusion.'
      },
      {
        id: 'biryani-awadhi-pakki',
        versionTitle: 'Awadhi / Lucknowi Pakki Dum Biryani (North Indian Royal Style)',
        tagline: 'Aristocratic delicacy featuring saffron-perfumed rice layered with tender meat simmered in rich Yakhni stock.',
        regionalLineage: {
          district: 'Lucknow & Awadh',
          region: 'North Indian',
          state: 'Uttar Pradesh',
          heritageContext: 'Culinary jewel of the Nawabs of Awadh, emphasizing subtle floral aromas (ittar, kewra, saffron), gentle spicing, and delicate mouthfeel.',
          traditionalVessel: 'Tinned Copper Handi',
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 8,
          activeTimeMin: 50,
          passiveTimeMin: 90,
          techniqueComplexity: 'Artisanal',
          justification: 'Requires multi-stage royal technique: extracting a pristine spiced bone broth (Yakhni), separate browning and tenderizing of meat in cultured ghee, perfuming basmati with saffron-infused milk and edible floral essence, and sealed gentle dum maturation.',
        },
        servings: 6,
        prepTimeMin: 30,
        cookTimeMin: 60,
        spiceLevel: 2,
        ingredients: [
          { id: 'bir3-1', name: 'Aged Long Grain Basmati', amount: 3, unit: 'cups', category: 'grain' },
          { id: 'bir3-2', name: 'Mutton Shanks or Cubes', amount: 800, unit: 'grams', category: 'protein' },
          { id: 'bir3-3', name: 'Potli Masala (Fennel, Coriander seeds, Cardamom in muslin pouch)', amount: 1, unit: 'piece', category: 'spice' },
          { id: 'bir3-4', name: 'Desi Cow Ghee', amount: 6, unit: 'tbsp', category: 'dairy' },
          { id: 'bir3-5', name: 'Kewra & Rose Water with Meetha Ittar', amount: 1, unit: 'tsp', category: 'aromatic' },
          { id: 'bir3-6', name: 'Saffron Strands in Milk', amount: 0.5, unit: 'tsp', category: 'spice' },
          { id: 'bir3-7', name: 'Ginger-Garlic Extract', amount: 3, unit: 'tbsp', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Mutton',
            substitute: 'Paneer & Lotus Stem (Kamal Kakdi)',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Lotus stem absorbs the delicate saffron-fennel yakhni broth with satisfying toothsome texture.',
            authenticityNote: 'Kamal Kakdi is an authentic Kashmiri and Awadhi royal vegetable.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Make the Yakhni: Boil mutton with water, sliced onions, ginger-garlic paste, salt, and a muslin spice pouch (fennel seeds, coriander seeds, cardamom, cloves) for 45 minutes until meat is tender and stock is rich.',
            timerSeconds: 2700,
            timerLabel: 'Simmer Yakhni (45 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Strain the stock and reserve. Squeeze the spice pouch and discard. Separate the tender mutton pieces.',
            techniqueTip: 'Straining ensures a silky, crystal-clear sauce free of gritty spice residues.'
          },
          {
            stepNumber: 3,
            instruction: 'Sauté mutton pieces in ghee with ginger extract and whole garam masala until lightly golden and aromatic.',
            timerSeconds: 300,
            timerLabel: 'Sauté Mutton (5 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Parboil basmati rice in the fragrant Yakhni stock until 80% cooked. Drain, reserving half a cup of stock.',
            timerSeconds: 360,
            timerLabel: 'Cook Rice in Stock (6 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'In a heavy pot, layer the spiced meat at bottom. Spread the aromatic basmati rice on top.',
            techniqueTip: 'Sprinkle saffron milk, kewra, and drops of meetha ittar across the rice.'
          },
          {
            stepNumber: 6,
            instruction: 'Drizzle remaining reserved Yakhni stock and melted ghee over the top layer.',
            techniqueTip: 'Stock provides moisture so rice stems during dum without drying out.'
          },
          {
            stepNumber: 7,
            instruction: 'Seal with dough or foil and place on low flame for 20 minutes for the royal aromas to marry.',
            timerSeconds: 1200,
            timerLabel: 'Dum Maturation (20 Mins)'
          },
          {
            stepNumber: 8,
            instruction: 'Gently fluff and serve with chilled boondi raita.',
            techniqueTip: 'Notice the contrast between white and saffron rice grains.'
          }
        ],
        proTips: [
          'Awadhi biryani is subtle and perfumed, never oily or red with chilli powder.',
          'The secret is cooking the rice directly in strained mutton Yakhni broth.'
        ],
        servingSuggestions: ['Awadhi Boondi Raita', 'Zarda Sweet Rice'],
        whyThisDiffers: 'Unlike Hyderabadi Kacchi Biryani, meat is pre-cooked in aromatic Yakhni broth before layering, highlighting floral perfume (kewra, saffron, ittar) rather than fiery spice.'
      }
    ]
  },
  {
    id: 'dal-pappu',
    name: 'Dal & Pappu (Lentils & Gravies)',
    teluguName: 'పప్పు / దాల్ మఖని',
    hindiName: 'दाल मखनी / तड़का दाल',
    tamilName: 'பருப்பு / சாம்பார்',
    category: 'Lentils & Gravies',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The daily nourishment of India: from slow-simmered Punjabi whole black lentils to quick tangy Andhra pressure-pot dal.',
    culturalPhilosophy: 'Lentils represent the culinary heartbeat of the subcontinent. Every province commands its own soul: Amritsari dhabas nurse whole black urad on embers for 8 hours with cultured butter; Telugu families mash toor dal with sour tomatoes and sizzle a fiery garlic-ghee popu; while Karnataka Udupi masters grind fresh coconut and spices for temple sambar.',
    variations: [
      {
        id: 'dal-makhani-dhaba',
        versionTitle: 'Dhaba-Style Slow-Cooked Dal Makhani (Punjab Amritsari Style)',
        tagline: 'Velvety, creamy whole black lentils and kidney beans slow-simmered on embers for hours with butter and woodsmoke.',
        regionalLineage: {
          district: 'Amritsar & Gurdaspur',
          region: 'North Indian',
          state: 'Punjab',
          heritageContext: 'Refined in roadside highway dhabas across the Grand Trunk road, where pots simmer overnight on spent tandoor charcoal embers, creating natural starch creaminess.',
          traditionalVessel: 'Heavy Copper Degchi / Clay Handi',
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 45,
          passiveTimeMin: 480, // Overnight soak + 3 hour simmer
          techniqueComplexity: 'Artisanal',
          justification: 'Demands long overnight legume soaking, followed by a minimum 3 to 4-hour slow simmer on gentle heat with continuous hand-mashing against the vessel walls to release natural starches for creamy emulsion (without relying heavily on industrial cream), finished with a live charcoal Dhungar woodsmoke infusion.',
        },
        servings: 6,
        prepTimeMin: 20,
        cookTimeMin: 180,
        spiceLevel: 2,
        ingredients: [
          { id: 'dal1-1', name: 'Whole Black Urad Dal (Sabut Urad)', amount: 1.5, unit: 'cups', category: 'lentil', notes: 'Soaked overnight 8-12 hours' },
          { id: 'dal1-2', name: 'Dark Red Kidney Beans (Rajma)', amount: 0.25, unit: 'cup', category: 'lentil' },
          { id: 'dal1-3', name: 'Pure Desi White Butter (Makhan)', amount: 5, unit: 'tbsp', category: 'dairy' },
          { id: 'dal1-4', name: 'Fresh Cream (Malai)', amount: 0.35, unit: 'cup', category: 'dairy' },
          { id: 'dal1-5', name: 'Ripe Country Tomato Puree', amount: 2, unit: 'cups', category: 'vegetable' },
          { id: 'dal1-6', name: 'Degi Mirch (Kashmiri Chilli)', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'dal1-7', name: 'Ginger-Garlic Paste', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'dal1-8', name: 'Kasoori Methi (Dry Fenugreek Leaves)', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'dal1-9', name: 'Natural Charcoal Lump (for Dhungar smoke)', amount: 1, unit: 'piece', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'White Butter & Dairy Cream',
            substitute: 'Soaked Cashew Cream and Virgin Coconut Oil or Mustard Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Rich vegan makhani base with silky mouthfeel and zero cholesterol.',
            authenticityNote: 'Cashew puree emulsifies naturally with cooked urad starch.'
          },
          {
            original: 'Charcoal Dhungar Smoke',
            substitute: 'Smoked Paprika or 1 drop natural liquid smoke',
            category: 'spice',
            ratio: '0.5 tsp',
            culinaryEffect: 'Imparts nostalgic woodfire character when natural charcoal is unavailable indoors.',
            authenticityNote: 'Dhungar using live lump charcoal and ghee is the gold standard.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Wash black urad and rajma 4-5 times until water runs clear. Soak in warm water for 8 to 12 hours.',
            timerSeconds: 28800,
            timerLabel: 'Soak Beans Overnight (8-12 Hours)',
            techniqueTip: 'Rubbing the beans between palms while washing removes chalky starch and dark surface bitterness.'
          },
          {
            stepNumber: 2,
            instruction: 'Pressure cook or boil with 6 cups water, 1 tsp salt, and 1 tbsp ginger paste until beans are butter-soft when squashed.',
            timerSeconds: 1800,
            timerLabel: 'Boil Dal Tender (30 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'In a heavy pot, heat 2 tbsp butter. Sauté ginger-garlic paste and fresh tomato puree with Kashmiri Degi Mirch on medium flame until oil separates.',
            timerSeconds: 600,
            timerLabel: 'Cook Tomato Masala (10 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Pour the cooked lentils and their cooking liquid into the tomato base. Bring to a boil.',
            techniqueTip: 'Do not discard the dark bean cooking liquor; it holds maximum mineral depth.'
          },
          {
            stepNumber: 5,
            instruction: 'Reduce flame to the lowest setting. Simmer uncovered for 2 to 3 hours, stirring every 10 minutes and mashing beans against the pan wall with the back of a ladle to release natural starch creaminess.',
            timerSeconds: 7200,
            timerLabel: 'Slow Simmer & Mash (2 Hours)',
            techniqueTip: 'Patience here creates the velvety texture without needing heavy cream crutches.'
          },
          {
            stepNumber: 6,
            instruction: 'Stir in remaining white butter, fresh cream, crushed kasoori methi, and garam masala. Simmer for another 15 minutes.',
            timerSeconds: 900,
            timerLabel: 'Makhani Finish (15 Mins)'
          },
          {
            stepNumber: 7,
            instruction: 'Perform Dhungar: Place a glowing red charcoal lump in a small steel katori on top of the dal. Pour 1 tsp ghee on the coal and immediately seal pot with lid for 4 minutes to infuse pure tandoor smoke.',
            timerSeconds: 240,
            timerLabel: 'Charcoal Dhungar Smoke (4 Mins)',
            techniqueTip: 'Do not leave coal covered longer than 4 minutes or the smoke will taste bitter.'
          }
        ],
        proTips: [
          'The real secret to Dhaba dal is continuous slow mashing on the lowest flame.',
          'Always use Kashmiri Degi Mirch for vibrant scarlet hue without harsh burning heat.'
        ],
        servingSuggestions: ['Butter Garlic Naan', 'Jeera Rice', 'Sliced Onions with Lemon'],
        whyThisDiffers: 'Differs from home lentils through multi-hour continuous starch mashing, heavy cultured white butter incorporation, and charcoal smoke infusion.'
      },
      {
        id: 'dal-andhra-tomato-pappu',
        versionTitle: 'Andhra Tomato Pappu (Guntur & Coastal Style)',
        tagline: 'Comforting, tangy toor dal pressure-cooked with tomatoes and finished with a crackling garlic-ghee popu.',
        regionalLineage: {
          district: 'Guntur & Krishna',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'The indispensable everyday comfort food of every Telugu home, usually served as the second course of an authentic Andhra meal with hot steamed rice, ghee, and avakaya pickle.',
          traditionalVessel: 'Brass Pressure Pot & Wooden Pappu Gutti',
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 3,
          activeTimeMin: 12,
          passiveTimeMin: 15,
          techniqueComplexity: 'Low',
          justification: '3 simple, foolproof steps: one-pot cooking of toor dal with tomatoes and chillies, mashing with a wooden churner, and pouring a 2-minute golden garlic, cumin, and red chilli ghee tempering. Ready in under 30 minutes.',
        },
        servings: 4,
        prepTimeMin: 5,
        cookTimeMin: 20,
        spiceLevel: 3,
        ingredients: [
          { id: 'dal2-1', name: 'Kandipappu (Yellow Toor Dal)', amount: 1, unit: 'cup', category: 'lentil' },
          { id: 'dal2-2', name: 'Juicy Country Tomatoes (Nattu Tomato)', amount: 3, unit: 'pieces', category: 'vegetable', notes: 'Quartered' },
          { id: 'dal2-3', name: 'Guntur Green Chillies', amount: 4, unit: 'pieces', category: 'spice' },
          { id: 'dal2-4', name: 'Turmeric & Red Chilli Powder', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'dal2-5', name: 'Crushed Garlic Cloves (Vellulli)', amount: 8, unit: 'cloves', category: 'aromatic' },
          { id: 'dal2-6', name: 'Mustard Seeds & Cumin Seeds', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'dal2-7', name: 'Desi Ghee or Groundnut Oil', amount: 2, unit: 'tbsp', category: 'oil' },
          { id: 'dal2-8', name: 'Curry Leaves & Hing', amount: 1, unit: 'sprig', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Tomatoes',
            substitute: 'Fresh Gongura (Roselle leaves) or Green Raw Mango slices',
            category: 'vegetable',
            ratio: '1.5 cups gongura leaves',
            culinaryEffect: 'Transforms into legendary Andhra Gongura Pappu or Mamidikaya Pappu with earthy sourness.',
            authenticityNote: 'Gongura pappu is the undisputed culinary crown of Guntur.'
          },
          {
            original: 'Ghee',
            substitute: 'Cold-pressed Sesame Oil or Peanut Oil',
            category: 'oil',
            ratio: '1:1',
            culinaryEffect: 'Vegan-friendly; sesame oil lends a nutty coastal fragrance.',
            authenticityNote: 'Sesame oil is traditional in coastal Andhra.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'In a pressure cooker, add washed toor dal, quartered country tomatoes, green chillies, turmeric, red chilli powder, and 2.5 cups water. Cook for 4 whistles until completely tender.',
            timerSeconds: 900,
            timerLabel: 'Pressure Cook Dal (15 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Release pressure. Add 1.25 tsp rock salt and mash the dal and tomatoes into a smooth, thick consistency using a wooden churner (Pappu gutti) or flat spatula.',
            techniqueTip: 'Mashing tomatoes directly into the dal creates a velvety, naturally emulsified broth.'
          },
          {
            stepNumber: 3,
            instruction: 'Heat ghee in a small pan for the Popu (tempering). Add crushed garlic cloves and sauté until golden brown. Add mustard seeds, cumin seeds, dry red chillies, curry leaves, and a pinch of hing. Pour sizzling into the mashed dal and cover immediately.',
            timerSeconds: 120,
            timerLabel: 'Garlic Ghee Popu (2 Mins)',
            techniqueTip: 'Covering immediately traps the aromatic garlic and hing vapor inside the dal.'
          }
        ],
        proTips: [
          'Using country tomatoes (Natu Tomato) gives essential acidity without needing tamarind.',
          'Always crush the garlic with skin on for deep, sweet roasted garlic flavor.'
        ],
        servingSuggestions: ['Steamed Rice with Ghee', 'Avakaya (Mango Pickle)', 'Mudda Pappu'],
        whyThisDiffers: 'Differs from Dal Tadka by cooking tomatoes and chillies directly with the raw lentils and emphasizing crushed golden garlic in the finishing ghee popu.'
      },
      {
        id: 'dal-udupi-sambar',
        versionTitle: 'Udupi Sambhar (Karnataka Temple Style)',
        tagline: 'Fragrant, mildly sweet, vegetable stew enriched with freshly dry-roasted coconut-chana dal spice paste and jaggery.',
        regionalLineage: {
          district: 'Udupi & Dakshina Kannada',
          region: 'South Indian',
          state: 'Karnataka',
          heritageContext: 'Rooted in the ancient Ashta Mathas of Udupi, free from onion and garlic (Satvik), celebrated for its balance of tamarind, fresh coconut, and jaggery.',
          traditionalVessel: 'Heavy Copper Bottomed Pot',
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 5,
          activeTimeMin: 25,
          passiveTimeMin: 20,
          techniqueComplexity: 'Moderate',
          justification: 'Requires dry-roasting whole spices (coriander, chana dal, fenugreek, Byadagi chillies) and wet-grinding with fresh coconut to exact consistency, boiling vegetables (drumstick, pumpkin) in tamarind water to retain texture, and balancing sweetness and sourness.',
        },
        servings: 5,
        prepTimeMin: 15,
        cookTimeMin: 25,
        spiceLevel: 2,
        ingredients: [
          { id: 'dal3-1', name: 'Toor Dal (Thogari Bele)', amount: 1, unit: 'cup', category: 'lentil' },
          { id: 'dal3-2', name: 'Fresh Grated Coconut', amount: 0.5, unit: 'cup', category: 'vegetable' },
          { id: 'dal3-3', name: 'Byadagi Red Chillies', amount: 5, unit: 'pieces', category: 'spice' },
          { id: 'dal3-4', name: 'Coriander & Chana Dal', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'dal3-5', name: 'Fenugreek & Cumin Seeds', amount: 0.5, unit: 'tsp', category: 'spice' },
          { id: 'dal3-6', name: 'Vegetables (Drumstick, Ash Gourd, Pumpkin)', amount: 2, unit: 'cups', category: 'vegetable' },
          { id: 'dal3-7', name: 'Tamarind Pulp & Jaggery (Bella)', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'dal3-8', name: 'Coconut Oil & Mustard Seeds', amount: 2, unit: 'tbsp', category: 'oil' }
        ],
        substitutions: [
          {
            original: 'Fresh Grated Coconut',
            substitute: 'Desiccated Coconut reconstituted in warm water or Coconut Milk',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Provides gentle sweetness and body when fresh coconut is unavailable.',
            authenticityNote: 'Fresh coastal coconut is native to Udupi.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Cook toor dal with turmeric and water until mushy. Mash lightly and set aside.',
            timerSeconds: 900,
            timerLabel: 'Cook Toor Dal (15 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Dry roast Byadagi chillies, coriander seeds, chana dal, cumin, and fenugreek seeds in 0.5 tsp coconut oil until aromatic. Grind with fresh coconut and 0.5 cup water to a smooth paste (Udupi Sambhar paste).',
            timerSeconds: 300,
            timerLabel: 'Roast & Grind Paste (5 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Boil vegetables in 2 cups water with tamarind pulp, turmeric, and salt for 10 minutes until fork tender.',
            timerSeconds: 600,
            timerLabel: 'Boil Vegetables (10 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Add the mashed toor dal, fresh ground coconut spice paste, and 1 tbsp jaggery to the boiling vegetables. Simmer on medium-low for 8 minutes.',
            timerSeconds: 480,
            timerLabel: 'Simmer Sambar (8 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Temper with coconut oil, mustard seeds, curry leaves, and asafoetida. Pour over sambhar and rest for 10 minutes before serving.',
            techniqueTip: 'Coconut oil tempering is the hallmark of coastal Karnataka temple cuisine.'
          }
        ],
        proTips: [
          'Byadagi chillies provide brilliant ruby-red color with gentle mild heat.',
          'The addition of jaggery is non-negotiable for authentic Udupi balance.'
        ],
        servingSuggestions: ['Idli', 'Medu Vada', 'Steamed Rice with Ghee'],
        whyThisDiffers: 'Distinct from Tamil sambar by incorporating freshly ground coconut and jaggery with an entirely onion-and-garlic-free Satvik temple preparation.'
      }
    ]
  }
];
