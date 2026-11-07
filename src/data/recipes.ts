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
        nutritionFacts: {
          servingSize: '1 Crepe with Semolina Upma (approx. 200g)',
          calories: 345,
          proteinGrams: 14,
          carbsGrams: 52,
          fatGrams: 9,
          fiberGrams: 7,
          sodiumMg: 360,
          dietaryHighlights: ['High Plant Protein', 'Digestive Ginger', 'Complex Carbs', 'Zero Trans Fat'],
        },
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
        nutritionFacts: {
          servingSize: '1 Crispy Crepe with Caramelized Onions (approx. 140g)',
          calories: 240,
          proteinGrams: 15,
          carbsGrams: 34,
          fatGrams: 5,
          fiberGrams: 8,
          sodiumMg: 290,
          dietaryHighlights: ['High Protein', 'Gluten-Free', 'Low Saturated Fat', 'Rich in Folate'],
        },
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
        nutritionFacts: {
          servingSize: '1 Golden Fenugreek Crepe (approx. 150g)',
          calories: 265,
          proteinGrams: 13,
          carbsGrams: 39,
          fatGrams: 6.5,
          fiberGrams: 7.5,
          sodiumMg: 310,
          dietaryHighlights: ['Fenugreek Blood Sugar Balance', 'Garlic Allicin', 'Low GI Lentil Starch'],
        },
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
        nutritionFacts: {
          servingSize: '1 Heaped Bowl (approx. 180g)',
          calories: 380,
          proteinGrams: 7,
          carbsGrams: 62,
          fatGrams: 12,
          fiberGrams: 4.5,
          sodiumMg: 420,
          dietaryHighlights: ['Antioxidant Curcumin', 'Cold-Pressed Lignans', 'Heart-Healthy Fats'],
        },
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
        nutritionFacts: {
          servingSize: '1 Citrus Bowl (approx. 160g)',
          calories: 295,
          proteinGrams: 6,
          carbsGrams: 48,
          fatGrams: 9,
          fiberGrams: 2.5,
          sodiumMg: 340,
          dietaryHighlights: ['Vitamin C Rich', 'Quick Cellular Energy', 'Digestive Gingerol'],
        },
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
        nutritionFacts: {
          servingSize: '1 Pungent Mustard Bowl (approx. 170g)',
          calories: 330,
          proteinGrams: 8,
          carbsGrams: 51,
          fatGrams: 11,
          fiberGrams: 4,
          sodiumMg: 390,
          dietaryHighlights: ['Sinus-Clearing Glucosinolates', 'Metabolic Boost', 'Zero Added Sugar'],
        },
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
        nutritionFacts: {
          servingSize: '1 Royal Portion with Meat & Rice (approx. 320g)',
          calories: 540,
          proteinGrams: 32,
          carbsGrams: 58,
          fatGrams: 20,
          fiberGrams: 3.5,
          sodiumMg: 580,
          dietaryHighlights: ['High Protein', 'Natural Bone Collagen', 'Saffron Carotenoids'],
        },
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
        nutritionFacts: {
          servingSize: '1 Urli Plate with Country Fowl (approx. 280g)',
          calories: 460,
          proteinGrams: 28,
          carbsGrams: 52,
          fatGrams: 15,
          fiberGrams: 3,
          sodiumMg: 510,
          dietaryHighlights: ['Lean Country Poultry', 'Short-Grain Digestibility', 'Piperine Absorption Booster'],
        },
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
        nutritionFacts: {
          servingSize: '1 Royal Saffron Plate (approx. 300g)',
          calories: 490,
          proteinGrams: 29,
          carbsGrams: 56,
          fatGrams: 16,
          fiberGrams: 2.8,
          sodiumMg: 490,
          dietaryHighlights: ['Yakhni Bone Mineral Extraction', 'Digestive Fennel', 'Gentle on Gut'],
        },
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
        nutritionFacts: {
          servingSize: '1 Deep Bowl (approx. 220g)',
          calories: 360,
          proteinGrams: 14,
          carbsGrams: 38,
          fatGrams: 17,
          fiberGrams: 9,
          sodiumMg: 450,
          dietaryHighlights: ['High Soluble Fiber', 'Slow-Release Low GI', 'Rich Iron & Magnesium'],
        },
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
        nutritionFacts: {
          servingSize: '1 Bowl (approx. 180g)',
          calories: 195,
          proteinGrams: 11,
          carbsGrams: 26,
          fatGrams: 5,
          fiberGrams: 6,
          sodiumMg: 360,
          dietaryHighlights: ['Tomato Lycopene', 'High Plant Fiber', 'Heart-Healthy Garlic'],
        },
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
        nutritionFacts: {
          servingSize: '1 Vegetable Bowl (approx. 200g)',
          calories: 185,
          proteinGrams: 8.5,
          carbsGrams: 28,
          fatGrams: 4.5,
          fiberGrams: 5.5,
          sodiumMg: 380,
          dietaryHighlights: ['Medium Chain Triglycerides (MCTs)', 'Drumstick Micronutrients', 'Pure Satvik'],
        },
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
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa (Fermented Rice & Lentil Crepe)',
    teluguName: 'మసాలా దోశ',
    hindiName: 'मसाला डोसा',
    tamilName: 'மசாலா தோசை',
    category: 'Breakfast',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The world-famous fermented rice and black gram crepe with fragrant spiced potato filling, prepared in distinct regional expressions.',
    culturalPhilosophy: 'No single city owns the Dosa. Mysore crafts a golden, crisp exterior with a fluffy interior smeared with spicy garlic-chilli paste; Kadapa lines the crepe with fiery red chilli kaaram and roasted gram podi; while Chennai excels in paper-thin golden ghee roasts.',
    variations: [
      {
        id: 'dosa-andhra-kaaram',
        versionTitle: 'Andhra Kaaram Dosa (Kadapa & Rayalaseema Style)',
        tagline: 'Fiery, rustic crepe slathered with red chilli garlic paste and sprinkled with roasted chana dal podi.',
        regionalLineage: {
          district: 'Kadapa & Kurnool',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Rayalaseema street carts and heritage mess centers created this bold, spicy variation where the crepe is seasoned on the tawa itself.',
          traditionalVessel: 'Heavy Cast Iron Tawa'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 25,
          passiveTimeMin: 480,
          techniqueComplexity: 'Moderate',
          justification: 'Requires managing 8-12 hour batter fermentation, preparing raw pungent garlic-chilli kaaram, and timing the spreading of kaaram and dry podi on a smoking tawa before folding.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 20,
        spiceLevel: 4,
        nutritionFacts: {
          servingSize: '1 Dosa with Kaaram (approx. 180g)',
          calories: 290,
          proteinGrams: 8,
          carbsGrams: 46,
          fatGrams: 8,
          fiberGrams: 4,
          sodiumMg: 420,
          dietaryHighlights: ['Fermented Probiotic Batter', 'Metabolic Capsaicin', 'Plant Protein']
        },
        ingredients: [
          { id: 'dk-1', name: 'Sona Masoori Rice / Idli Rice', amount: 3, unit: 'cups', category: 'grain' },
          { id: 'dk-2', name: 'Whole Urad Dal (Minapappu)', amount: 1, unit: 'cup', category: 'lentil' },
          { id: 'dk-3', name: 'Fenugreek Seeds (Menthulu)', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'dk-4', name: 'Dry Red Chillies (Guntur)', amount: 8, unit: 'pieces', category: 'spice' },
          { id: 'dk-5', name: 'Garlic Cloves (Vellulli)', amount: 10, unit: 'pieces', category: 'aromatic' },
          { id: 'dk-6', name: 'Roasted Gram Dal (Pappula Podi)', amount: 4, unit: 'tbsp', category: 'lentil' },
          { id: 'dk-7', name: 'Cold-Pressed Groundnut Oil or Desi Ghee', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'dk-8', name: 'Rock Salt', amount: 1.5, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Desi Ghee',
            substitute: 'Cold-Pressed Sesame or Groundnut Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan friendly with nutty Rayalaseema street aroma.',
            authenticityNote: 'Groundnut oil is the daily standard in Rayalaseema.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak rice and urad dal with fenugreek seeds for 5 hours. Grind in a stone wet grinder until airy and smooth. Ferment for 8-10 hours in a warm room.',
            timerSeconds: 28800,
            timerLabel: 'Ferment Batter (8 Hours)'
          },
          {
            stepNumber: 2,
            instruction: 'Grind soaked Guntur red chillies, garlic cloves, cumin, and salt into a smooth, vibrant red kaaram paste with 2 tbsp water.',
            timerSeconds: 180,
            timerLabel: 'Grind Kaaram (3 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Heat a heavy cast iron tawa to high. Rub with half an onion. Pour a ladle of batter and swirl clockwise from center into a thin crepe.',
            techniqueTip: 'Wiping with onion seasoned with oil creates a non-stick patina naturally.'
          },
          {
            stepNumber: 4,
            instruction: 'Drizzle 1 tsp oil around edges. Once small bubbles form, smear 1 tbsp red chilli garlic paste evenly over the top surface.',
            timerSeconds: 90,
            timerLabel: 'Cook Base & Smear Kaaram'
          },
          {
            stepNumber: 5,
            instruction: 'Generously dust 1-2 tbsp roasted chana dal podi (pappula podi) over the smeared kaaram and roast until underside turns chestnut golden.',
            timerSeconds: 60,
            timerLabel: 'Roast with Podi'
          },
          {
            stepNumber: 6,
            instruction: 'Fold into a triangle or half-moon and serve smoking hot immediately.',
            techniqueTip: 'Do not flip a kaaram dosa; the top cooks via trapped steam and hot oil.'
          }
        ],
        proTips: ['Use aged garlic for pungent bite.', 'Never spread batter on a dry tawa; always season with an oiled onion.'],
        servingSuggestions: ['Fresh Coconut Chutney', 'Bombay Chutney / Senagapindi Gravy'],
        whyThisDiffers: 'Features a fiery in-crepe chilli-garlic rub and roasted lentil powder rather than a mild potato stuffing.'
      },
      {
        id: 'dosa-mysore-masala',
        versionTitle: 'Mysore Masala Dosa (Karnataka Heritage Style)',
        tagline: 'Signature thick, buttery-crisp shell with a cloud-soft interior, tangy red chutney, and potato sagu.',
        regionalLineage: {
          district: 'Mysuru & Bengaluru',
          region: 'South Indian',
          state: 'Karnataka',
          heritageContext: 'Originating from royal palace kitchens and iconic old-Bengaluru tiffin rooms like CTR and Vidyarthi Bhavan.',
          traditionalVessel: 'Heavy Cast Iron Dosa Plate'
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 40,
          passiveTimeMin: 600,
          techniqueComplexity: 'Artisanal',
          justification: 'Achieving the duality of an ultra-crisp exterior with a thick, porous, sponge-like interior requires specific flattened rice (poha) ratios, slow browning on low iron heat with generous benne (white butter), and two separate fillings.'
        },
        servings: 4,
        prepTimeMin: 30,
        cookTimeMin: 25,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '1 Mysore Masala Dosa with Sagu (approx. 240g)',
          calories: 380,
          proteinGrams: 9,
          carbsGrams: 54,
          fatGrams: 15,
          fiberGrams: 5,
          sodiumMg: 440,
          dietaryHighlights: ['Fermented Rice Probiotics', 'Pure White Butter / Benne', 'Satisfying Carbs']
        },
        ingredients: [
          { id: 'mm-1', name: 'Idli Rice & Raw Rice', amount: 3, unit: 'cups', category: 'grain' },
          { id: 'mm-2', name: 'Whole Urad Dal', amount: 0.75, unit: 'cup', category: 'lentil' },
          { id: 'mm-3', name: 'Chana Dal & Toor Dal', amount: 3, unit: 'tbsp', category: 'lentil', notes: 'Gives rich red-gold coloration' },
          { id: 'mm-4', name: 'Thick Poha (Flattened Rice)', amount: 0.5, unit: 'cup', category: 'grain', notes: 'Gives inner softness' },
          { id: 'mm-5', name: 'Mysore Benne (Cultured White Butter) or Ghee', amount: 4, unit: 'tbsp', category: 'dairy' },
          { id: 'mm-6', name: 'Boiled Potatoes', amount: 3, unit: 'pieces', category: 'vegetable' },
          { id: 'mm-7', name: 'Byadagi Red Chillies & Roasted Gram', amount: 6, unit: 'pieces', category: 'spice' },
          { id: 'mm-8', name: 'Mustard, Curry Leaves & Turmeric', amount: 1, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Mysore Benne (White Butter)',
            substitute: 'Virgin Coconut Oil or Groundnut Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan formulation with clean crispness.',
            authenticityNote: 'Traditional Karnataka tiffin places celebrate fresh churned butter, but sesame oil is a respected plant fat.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak rice, dals, and fenugreek seeds for 5 hours. Soak poha for 30 minutes before grinding. Grind to an aerated batter and ferment 10 hours.',
            timerSeconds: 36000,
            timerLabel: 'Fermentation (10 Hours)'
          },
          {
            stepNumber: 2,
            instruction: 'Prepare red chutney: Grind roasted chana dal, Byadagi chillies, garlic, tamarind, and salt to a thick spreadable paste.',
            timerSeconds: 240,
            timerLabel: 'Red Chutney'
          },
          {
            stepNumber: 3,
            instruction: 'Prepare potato palya: Temper mustard seeds, green chillies, ginger, turmeric, and onions. Add mashed boiled potatoes and fresh coriander.',
            timerSeconds: 480,
            timerLabel: 'Potato Palya (8 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Pour batter onto medium-hot cast iron tawa. Spread slightly thicker than standard dosa to allow the inner sponge to form.',
            techniqueTip: 'Do not spread paper thin; Mysore dosa requires substance inside.'
          },
          {
            stepNumber: 5,
            instruction: 'Add a generous dollop of butter or ghee to the edges and center. Cover with a domed lid for 60 seconds to trap steam.',
            timerSeconds: 60,
            timerLabel: 'Steam under Dome'
          },
          {
            stepNumber: 6,
            instruction: 'Remove lid, spread 1 tbsp red chutney across the top, and place 2 tbsp potato palya in the center.',
            timerSeconds: 60,
            timerLabel: 'Fill & Crisp'
          },
          {
            stepNumber: 7,
            instruction: 'Roast until the underside is deep amber brown, fold into a half cylinder, and serve with coconut chutney.',
            techniqueTip: 'The signature Mysore red color comes from the chana dal and Byadagi chillies.'
          }
        ],
        proTips: ['Poha is the secret ingredient for the soft inner honeycomb.', 'Byadagi chillies deliver royal ruby hue without extreme heat.'],
        servingSuggestions: ['Hotel Style Coconut Chutney', 'Piping Hot Filter Coffee'],
        whyThisDiffers: 'Features a thicker, aerated crumb with a dual texture: glass-like crisp outside and sponge-soft inside, topped with tangy garlic-chana red chutney.'
      }
    ]
  },
  {
    id: 'idli-sambar',
    name: 'Idli & Sambar (Steamed Lentil Cakes with Stew)',
    teluguName: 'ఇడ్లీ & సాంబార్',
    hindiName: 'इडली और सांभर',
    tamilName: 'இட்லி மற்றும் சாம்பார்',
    category: 'Breakfast',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Naturally fermented, steamed rice and lentil cakes paired with spiced aromatic vegetable stew.',
    culturalPhilosophy: 'Idli is celebrated across peninsular India in distinctive avatars: Madurai’s cloud-soft Mallipoo idli, Karnataka’s expansive plate-sized Thatte idli, and Kanchipuram’s ginger-and-pepper scented temple idli steamed in leaf baskets.',
    variations: [
      {
        id: 'idli-madurai-mallipoo',
        versionTitle: 'Madurai Mallipoo Idli (Jasmine Soft Tamil Style)',
        tagline: 'Feather-light, cloud-soft steamed cakes with freshly ground drumstick arachuvitta sambar.',
        regionalLineage: {
          district: 'Madurai',
          region: 'South Indian',
          state: 'Tamil Nadu',
          heritageContext: 'Madurai’s night stalls and Murugan Idli Shop perfected the delicate 4:1 idli rice to whole urad ratio, creating idlis as tender as jasmine buds (Mallipoo).',
          traditionalVessel: 'Brass Idli Steamer with Cotton Cloth'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 600,
          techniqueComplexity: 'Moderate',
          justification: 'Achieving the legendary jasmine lightness demands aerating urad dal to 3x volume in a stone wet grinder, maintaining temperature during fermentation, and peeling steaming cloth without tearing.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 15,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '3 Idlis with Sambar (approx. 250g)',
          calories: 260,
          proteinGrams: 10,
          carbsGrams: 52,
          fatGrams: 2,
          fiberGrams: 5,
          sodiumMg: 380,
          dietaryHighlights: ['Steamed & Zero Oil', 'Naturally Fermented Gut Health', 'High Bioavailability Protein']
        },
        ingredients: [
          { id: 'mi-1', name: 'Idli Parboiled Rice (Puzhungal Arisi)', amount: 4, unit: 'cups', category: 'grain' },
          { id: 'mi-2', name: 'Whole White Urad Dal (Gundu Ulundhu)', amount: 1, unit: 'cup', category: 'lentil' },
          { id: 'mi-3', name: 'Fenugreek Seeds', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'mi-4', name: 'Rock Salt', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'mi-5', name: 'Toor Dal (for Sambar)', amount: 0.75, unit: 'cup', category: 'lentil' },
          { id: 'mi-6', name: 'Drumsticks & Pearl Onions', amount: 1.5, unit: 'cups', category: 'vegetable' },
          { id: 'mi-7', name: 'Tamarind Pulp & Sambar Masala', amount: 2, unit: 'tbsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Parboiled Idli Rice',
            substitute: 'Barnyard Millet (Kuthiraivali) or Foxtail Millet',
            category: 'gluten',
            ratio: '1:1',
            culinaryEffect: 'Low glycemic index with equally soft steamed crumb.',
            authenticityNote: 'Millet idlis have deep historic precedents in Tamil Sangam literature.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak urad dal with fenugreek seeds for 4 hours. Soak idli rice separately for 5 hours. Grind urad dal in wet grinder by adding ice cold water in dashes until it transforms into a whipped meringue.',
            techniqueTip: 'Ice cold water prevents grinder motor heat from killing natural fermentation microbes.'
          },
          {
            stepNumber: 2,
            instruction: 'Grind rice to a fine rava texture. Mix whipped urad and ground rice together with bare hands and rock salt.',
            timerSeconds: 300,
            timerLabel: 'Aerating Mix (5 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Ferment in a warm dark cabinet for 8-12 hours until batter doubles in volume and smells pleasantly sour.',
            timerSeconds: 36000,
            timerLabel: 'Ferment Batter (10 Hours)'
          },
          {
            stepNumber: 4,
            instruction: 'Line idli molds with wet muslin cotton cloth. Pour batter without deflating the trapped bubbles.',
            techniqueTip: 'Never beat or stir fermented idli batter vigorously; gently ladle from the surface.'
          },
          {
            stepNumber: 5,
            instruction: 'Steam on high for 10-12 minutes until a toothpick inserted in the center emerges completely clean.',
            timerSeconds: 660,
            timerLabel: 'Steam Idlis (11 Mins)'
          },
          {
            stepNumber: 6,
            instruction: 'Sprinkle cold water on the reverse of the cloth and peel idlis smoothly into serving bowls. Serve with piping hot drumstick sambar.',
            techniqueTip: 'Cold water spray contracts the starch instantly, allowing clean separation from the fabric.'
          }
        ],
        proTips: ['Muslin cloth produces significantly softer idlis than greased metal plates.', 'Fermentation temperature ideally between 28°C and 32°C.'],
        servingSuggestions: ['Drumstick Arachuvitta Sambar', 'Kara Chutney', 'Podi with Ghee'],
        whyThisDiffers: 'Strict 4:1 ratio steamed on traditional damp muslin cloth creates an airy, pillowy crumb unrivaled by standard metal molds.'
      },
      {
        id: 'idli-thatte',
        versionTitle: 'Karnataka Thatte Idli (Bidadi Plate Style)',
        tagline: 'Expansive, plate-sized steamed idli topped with churned butter and fiery chutney podi.',
        regionalLineage: {
          district: 'Ramanagara / Bidadi',
          region: 'South Indian',
          state: 'Karnataka',
          heritageContext: 'Born along the Bengaluru-Mysuru highway in Bidadi, where travelers needed substantial, dense yet soft steamed cakes to fuel long journeys.',
          traditionalVessel: 'Wide Circular Thatte (Plate) Steamer'
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 5,
          activeTimeMin: 20,
          passiveTimeMin: 540,
          techniqueComplexity: 'Low',
          justification: 'Easier to mold than small idlis, using wide flat greased plates, tapioca sago pearls for foolproof softness, and straightforward steaming.'
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 18,
        spiceLevel: 1,
        nutritionFacts: {
          servingSize: '1 Thatte Idli (approx. 200g)',
          calories: 275,
          proteinGrams: 8,
          carbsGrams: 55,
          fatGrams: 3,
          fiberGrams: 4,
          sodiumMg: 350,
          dietaryHighlights: ['Steamed', 'Probiotic Goodness', 'Kid Friendly']
        },
        ingredients: [
          { id: 'ti-1', name: 'Idli Rice', amount: 3, unit: 'cups', category: 'grain' },
          { id: 'ti-2', name: 'Urad Dal', amount: 1, unit: 'cup', category: 'lentil' },
          { id: 'ti-3', name: 'Sago Pearls (Sabudana / Javvarisi)', amount: 0.5, unit: 'cup', category: 'grain', notes: 'Gives bounce and sheen' },
          { id: 'ti-4', name: 'Fresh Cultured Butter', amount: 2, unit: 'tbsp', category: 'dairy' },
          { id: 'ti-5', name: 'Chutney Podi', amount: 2, unit: 'tbsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Cultured Butter',
            substitute: 'Toasted Sesame Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan alternative with deep nutty aroma.',
            authenticityNote: 'Sesame oil with podi is a classic South Indian pairing.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak rice, urad dal, and sabudana together for 5 hours. Grind into a slightly textured batter and ferment for 9 hours.',
            timerSeconds: 32400,
            timerLabel: 'Ferment Batter (9 Hours)'
          },
          {
            stepNumber: 2,
            instruction: 'Grease large flat Thatte plates with a smear of oil or ghee.',
            timerSeconds: 60,
            timerLabel: 'Grease Plates'
          },
          {
            stepNumber: 3,
            instruction: 'Fill plates with 1.5 ladles of batter each, spreading to the edges.',
            techniqueTip: 'Ensure uniform thickness of approximately 1.5 cm across the plate.'
          },
          {
            stepNumber: 4,
            instruction: 'Steam in a multi-tier steamer on high flame for 12-14 minutes.',
            timerSeconds: 780,
            timerLabel: 'Steam Thatte Idli (13 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Demold with a wet spatula. Top with a cube of fresh white butter and a tablespoon of spiced podi.',
            techniqueTip: 'Let rest for 90 seconds before running spatula around edges to prevent tearing.'
          }
        ],
        proTips: ['Sabudana (sago) pearls provide the distinctive spongy bounce and glossy surface.'],
        servingSuggestions: ['Karnataka Coconut Chutney', 'Red Chilly Chutney', 'Filter Coffee'],
        whyThisDiffers: 'Features sabudana in the grind and steamed as large individual circular plates topped with melting butter.'
      }
    ]
  },
  {
    id: 'paneer-royal-curries',
    name: 'Paneer Royal Gravies (Artisanal Cottage Cheese)',
    teluguName: 'పనీర్ రాయల్ కూరలు',
    hindiName: 'शाही पनीर और साग पनीर',
    tamilName: 'பனீர் ஸ்பெஷல் கிரேவி',
    category: 'Royal Curries',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The pinnacle of North Indian vegetarian gastronomy: silky, rich gravies coating tender hand-crafted paneer.',
    culturalPhilosophy: 'Paneer traditions celebrate regional terroir: Amritsar balances ripe tomatoes with slow-cooked makkhan (churned butter) and Kasuri methi, while the rural Grand Trunk highway dhabas slow-simmer winter mustard greens into velvety Saag Paneer.',
    variations: [
      {
        id: 'paneer-amritsari-makkhan',
        versionTitle: 'Amritsari Paneer Butter Masala (Punjab Heritage Gravy)',
        tagline: 'Velvety, sun-ripened tomato and cashew gravy enriched with churned butter and fragrant Kasuri methi.',
        regionalLineage: {
          district: 'Amritsar',
          region: 'North Indian',
          state: 'Punjab',
          heritageContext: 'Refined in Punjab’s iconic food capital, balancing the natural sweetness of cashew paste with aromatic dried fenugreek leaves from Kasur.',
          traditionalVessel: 'Heavy Brass Handi or Cast Iron Kadai'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Demands balancing tomato acidity with cashew emulsion, achieving a silky restaurant-grade gravy without graininess, and keeping paneer cubes soft and succulent without rubberiness.'
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 25,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '1 Bowl Gravy with Paneer (approx. 220g)',
          calories: 360,
          proteinGrams: 16,
          carbsGrams: 14,
          fatGrams: 28,
          fiberGrams: 3,
          sodiumMg: 410,
          dietaryHighlights: ['High Protein Vegetarian', 'Rich Calcium', 'Keto / Low-Carb Compatible']
        },
        ingredients: [
          { id: 'pb-1', name: 'Fresh Malai Paneer', amount: 350, unit: 'grams', category: 'dairy', notes: 'Cut into bite cubes' },
          { id: 'pb-2', name: 'Ripe Red Tomatoes', amount: 5, unit: 'pieces', category: 'vegetable' },
          { id: 'pb-3', name: 'Whole Raw Cashews', amount: 15, unit: 'pieces', category: 'grain', notes: 'Soaked in warm water' },
          { id: 'pb-4', name: 'Desi Butter (Makkhan)', amount: 3, unit: 'tbsp', category: 'dairy' },
          { id: 'pb-5', name: 'Fresh Dairy Cream (Malai)', amount: 3, unit: 'tbsp', category: 'dairy' },
          { id: 'pb-6', name: 'Ginger-Garlic Paste', amount: 1.5, unit: 'tbsp', category: 'aromatic' },
          { id: 'pb-7', name: 'Kashmiri Degi Mirch', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'pb-8', name: 'Kasuri Methi (Dried Fenugreek)', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'pb-9', name: 'Green Cardamom & Cinnamon', amount: 4, unit: 'pieces', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Malai Paneer',
            substitute: 'Firm Tofu soaked in salted warm water or Tempeh',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Vegan alternative with excellent protein density and firm texture.',
            authenticityNote: 'Soaking tofu in light salted turmeric water removes beaniness.'
          },
          {
            original: 'Fresh Dairy Cream',
            substitute: 'Thick Coconut Milk or Extra Cashew Cream',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Delivers equivalent silkiness and richness without lactose.',
            authenticityNote: 'Cashew cream is widely accepted in high-end North Indian vegetarian catering.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Roughly chop tomatoes and boil with green cardamom, cloves, and cinnamon stick in 1 cup water for 10 minutes until skins curl.',
            timerSeconds: 600,
            timerLabel: 'Boil Tomatoes (10 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Blend boiled tomatoes and soaked cashews together into an ultra-fine, velvety puree. Strain through a soup sieve to remove tomato skins and seeds.',
            techniqueTip: 'Straining is the indispensable secret to achieving velvet makhani silkiness.'
          },
          {
            stepNumber: 3,
            instruction: 'Melt 2 tbsp butter in a heavy kadai. Sauté ginger-garlic paste and Kashmiri red chilli powder for 45 seconds on low heat.',
            timerSeconds: 45,
            timerLabel: 'Bloom Degi Mirch'
          },
          {
            stepNumber: 4,
            instruction: 'Pour the strained tomato-cashew puree into the butter. Simmer on medium-low flame for 12 minutes until butter begins separating at the margins.',
            timerSeconds: 720,
            timerLabel: 'Simmer Makhani Base (12 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Add salt, 0.5 tsp honey or sugar to balance tartness, and slide in the fresh paneer cubes. Gently simmer for 3 minutes.',
            timerSeconds: 180,
            timerLabel: 'Warm Paneer in Gravy'
          },
          {
            stepNumber: 6,
            instruction: 'Crush roasted Kasuri methi between palms and sprinkle over gravy. Finish with fresh cream and remaining tablespoon of cold butter.',
            techniqueTip: 'Never boil paneer for prolonged periods, or the proteins contract and turn leathery.'
          }
        ],
        proTips: ['Soak fresh paneer cubes in warm salted water for 15 minutes before adding to gravy for maximum juiciness.'],
        servingSuggestions: ['Garlic Butter Naan', 'Jeera Rice', 'Tandoori Roti'],
        whyThisDiffers: 'Distinguished by a strained cashew-tomato makhani base finished with fragrant Kasuri methi rather than heavy onion-based curries.'
      },
      {
        id: 'paneer-dhaba-saag',
        versionTitle: 'Dhaba Saag Paneer (Slow-Simmered Mustard Greens)',
        tagline: 'Hearty winter harvest of sarson and palak greens slow-cooked with makki flour and garlic-pan-fried paneer.',
        regionalLineage: {
          district: 'Jalandhar & Ludhiana',
          region: 'North Indian',
          state: 'Punjab',
          heritageContext: 'Highway dhabas celebrate the winter bounty of mustard greens mashed with a wooden churner (madhani) and finished with generous white butter.',
          traditionalVessel: 'Earthen Handi or Iron Kadai'
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 45,
          passiveTimeMin: 30,
          techniqueComplexity: 'Artisanal',
          justification: 'Requires managing the bitterness of raw mustard greens through parboiling, emulsifying the greens with maize flour (makki ka atta) to achieve creamy cohesion, and searing paneer cubes without drying them.'
        },
        servings: 4,
        prepTimeMin: 25,
        cookTimeMin: 40,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '1 Bowl Saag Paneer (approx. 240g)',
          calories: 310,
          proteinGrams: 17,
          carbsGrams: 12,
          fatGrams: 22,
          fiberGrams: 6,
          sodiumMg: 390,
          dietaryHighlights: ['Rich in Iron & Folate', 'High Dietary Fiber', 'Keto Friendly']
        },
        ingredients: [
          { id: 'sp-1', name: 'Mustard Greens (Sarson)', amount: 400, unit: 'grams', category: 'vegetable' },
          { id: 'sp-2', name: 'Spinach (Palak) & Bathua', amount: 250, unit: 'grams', category: 'vegetable' },
          { id: 'sp-3', name: 'Fresh Paneer', amount: 300, unit: 'grams', category: 'dairy' },
          { id: 'sp-4', name: 'Makki ka Atta (Yellow Maize Flour)', amount: 2, unit: 'tbsp', category: 'grain' },
          { id: 'sp-5', name: 'Garlic Cloves (finely chopped)', amount: 12, unit: 'pieces', category: 'aromatic' },
          { id: 'sp-6', name: 'Desi Ghee & White Butter', amount: 3, unit: 'tbsp', category: 'dairy' },
          { id: 'sp-7', name: 'Green Chillies & Ginger', amount: 2, unit: 'tbsp', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Mustard Greens (Sarson)',
            substitute: 'Kale or Swiss Chard paired with Baby Spinach',
            category: 'vegetable',
            ratio: '1:1',
            culinaryEffect: 'Provides identical earthy mineral bite when mustard greens are unavailable out of season.',
            authenticityNote: 'Diaspora Punjabi homes commonly combine kale and spinach.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Wash greens multiple times to remove soil. Rough chop and boil with green chillies, ginger, and garlic in 1 cup water for 15 minutes.',
            timerSeconds: 900,
            timerLabel: 'Boil Greens (15 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Mash with a wooden madhani or coarsely pulse in a blender. Do not puree into a baby food liquid; retain rustic leafy texture.',
            techniqueTip: 'Coarse texture allows the saag to cling delightfully to flatbreads.'
          },
          {
            stepNumber: 3,
            instruction: 'Whisk maize flour (makki ka atta) into 0.5 cup warm water and stir into the simmering greens. Cook for 10 minutes to thicken and gloss.',
            timerSeconds: 600,
            timerLabel: 'Cook Maize Flour into Saag'
          },
          {
            stepNumber: 4,
            instruction: 'In a separate iron skillet, lightly pan-sear paneer cubes in 1 tbsp ghee for 2 minutes until light golden.',
            timerSeconds: 120,
            timerLabel: 'Pan Sear Paneer'
          },
          {
            stepNumber: 5,
            instruction: 'Prepare aromatic tadka: Heat ghee, fry lots of chopped garlic until deep hazelnut brown, add dried red chillies and pinch of hing.',
            timerSeconds: 90,
            timerLabel: 'Golden Garlic Tadka'
          },
          {
            stepNumber: 6,
            instruction: 'Fold paneer cubes into the simmering greens, pour sizzling garlic tadka over the saag, and rest 5 minutes before dishing out.',
            techniqueTip: 'Browned garlic transforms the aroma of greens completely.'
          }
        ],
        proTips: ['The addition of maize flour binds the water and vegetable solids into a unified velvety emulsion.'],
        servingSuggestions: ['Makki ki Roti', 'Pickled Onions', 'Fresh Jaggery Pieces'],
        whyThisDiffers: 'Features slow-cooked whole winter greens and maize flour thickening rather than pureed baby spinach and cream.'
      }
    ]
  },
  {
    id: 'regional-chicken-curry',
    name: 'Regional Chicken Specialties (Natu Kodi & Chettinad)',
    teluguName: 'కోడి కూర (నాటుకోడి & చెట్టినాడు)',
    hindiName: 'देसी चिकन करी और चेट्टीनाड',
    tamilName: 'செட்டிநாடு கோழி வறுவல் / குழம்பு',
    category: 'Royal Curries',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Deeply spiced country fowl curries honoring ancient Southern dry-roast spice techniques.',
    culturalPhilosophy: 'Southern poultry gastronomy contrasts sharply with Northern gravies: Andhra’s Rayalaseema Natu Kodi celebrates fiery stone-ground poppy seeds and shallots, while Chettinad masters dry-roast stone flower (kalpasi) and Tellicherry peppercorns.',
    variations: [
      {
        id: 'chicken-andhra-natu-kodi',
        versionTitle: 'Andhra Natu Kodi Kura (Country Chicken Curry)',
        tagline: 'Fiery village-style country fowl curry simmered with stone-ground poppy seeds, shallots, and Guntur chillies.',
        regionalLineage: {
          district: 'Guntur & Krishna',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Natu Kodi (free-range village chicken) is celebrated in Andhra festivals and Sunday gatherings, cooked with robust bones that flavor the rich broth.',
          traditionalVessel: 'Heavy Cast Iron or Soapstone Pot'
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 40,
          passiveTimeMin: 30,
          techniqueComplexity: 'High',
          justification: 'Country chicken requires extended cooking and careful pressure management to tenderize muscular meat while preserving toothsome texture and emulsifying poppy seed paste.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 45,
        spiceLevel: 5,
        nutritionFacts: {
          servingSize: '1 Serving with Gravy (approx. 250g)',
          calories: 340,
          proteinGrams: 32,
          carbsGrams: 8,
          fatGrams: 20,
          fiberGrams: 3,
          sodiumMg: 450,
          dietaryHighlights: ['High Lean Protein', 'Collagen Rich Bone Broth', 'Low Carb']
        },
        ingredients: [
          { id: 'nk-1', name: 'Country Chicken (Natu Kodi) with bones', amount: 800, unit: 'grams', category: 'protein' },
          { id: 'nk-2', name: 'Shallots / Small Onions', amount: 1.5, unit: 'cups', category: 'vegetable' },
          { id: 'nk-3', name: 'White Poppy Seeds (Gasa Gasalu)', amount: 2, unit: 'tbsp', category: 'spice', notes: 'Soaked and ground' },
          { id: 'nk-4', name: 'Guntur Red Chilli Powder', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'nk-5', name: 'Coriander Seeds & Cumin', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'nk-6', name: 'Fresh Ginger-Garlic Paste', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'nk-7', name: 'Cold-Pressed Groundnut Oil', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'nk-8', name: 'Curry Leaves & Mint', amount: 3, unit: 'sprigs', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Country Chicken (Natu Kodi)',
            substitute: 'Broiler Chicken (Bone-in thighs) or Mutton',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Broiler chicken cooks in 18 minutes; adjust cooking time down by 25 minutes.',
            authenticityNote: 'Natu kodi meat has firmer chew and richer marrow.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Marinate bone-in country chicken in turmeric, 1 tsp salt, and 1 tbsp ginger-garlic paste for 30 minutes.',
            timerSeconds: 1800,
            timerLabel: 'Marinate Chicken (30 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Dry roast coriander seeds, cumin, cloves, cardamom, and cinnamon. Soak poppy seeds in warm water. Grind together into a smooth wet masala paste.',
            timerSeconds: 300,
            timerLabel: 'Grind Masala (5 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Heat groundnut oil in a pressure cooker or heavy pot. Sauté shallots and slit green chillies until dark golden.',
            timerSeconds: 420,
            timerLabel: 'Sauté Shallots'
          },
          {
            stepNumber: 4,
            instruction: 'Add marinated chicken and sear on high heat for 6-8 minutes until meat releases juices and browns.',
            timerSeconds: 480,
            timerLabel: 'Sear Chicken on High Heat'
          },
          {
            stepNumber: 5,
            instruction: 'Add Guntur chilli powder and the ground poppy seed paste. Fry for 4 minutes until oil glistens.',
            timerSeconds: 240,
            timerLabel: 'Cook Masala'
          },
          {
            stepNumber: 6,
            instruction: 'Add 1.5 cups water, pressure cook for 5 whistles (or slow simmer covered for 45 minutes) until country fowl is tender.',
            timerSeconds: 1200,
            timerLabel: 'Pressure Cook (20 Mins)'
          },
          {
            stepNumber: 7,
            instruction: 'Open lid, simmer 5 minutes to thicken sauce, and garnish with fresh curry leaves and coriander.',
            techniqueTip: 'Poppy seed paste provides natural body without any heavy cream or tomatoes.'
          }
        ],
        proTips: ['Country chicken bones infuse exceptional richness into the gravy.', 'Do not use tomatoes; authentic Andhra kodi kura relies on shallots and poppy seeds.'],
        servingSuggestions: ['Garelu (Medu Vada)', 'Ragi Sangati', 'Steamed Rice with Ghee'],
        whyThisDiffers: 'No tomatoes or heavy cream; uses pure white poppy seeds and shallots for richness with potent Guntur heat.'
      },
      {
        id: 'chicken-chettinad-pepper',
        versionTitle: 'Chettinad Pepper Chicken (Tamil Nadu Royal Roast)',
        tagline: 'Signature aromatic roast chicken packed with freshly crushed black peppercorns, kalpasi, and star anise.',
        regionalLineage: {
          district: 'Sivaganga / Chettinad',
          region: 'South Indian',
          state: 'Tamil Nadu',
          heritageContext: 'Crafted by the Nattukottai Chettiars, legendary merchant traders who brought exotic spices from Southeast Asia into Tamil regional cuisine.',
          traditionalVessel: 'Heavy Cast Iron Kadai (Uruli)'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Requires roasting whole raw spices to precise aromatic threshold without charring the delicate stone flower (kalpasi), followed by dry roasting until gravy coats each chicken piece.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 4,
        nutritionFacts: {
          servingSize: '1 Serving Roast Chicken (approx. 220g)',
          calories: 320,
          proteinGrams: 30,
          carbsGrams: 6,
          fatGrams: 19,
          fiberGrams: 3,
          sodiumMg: 430,
          dietaryHighlights: ['Thermogenic Black Pepper', 'High Protein', 'Gluten Free']
        },
        ingredients: [
          { id: 'cc-1', name: 'Chicken (Bone-in Curry cut)', amount: 750, unit: 'grams', category: 'protein' },
          { id: 'cc-2', name: 'Tellicherry Black Peppercorns', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'cc-3', name: 'Kalpasi (Black Stone Flower)', amount: 1, unit: 'tsp', category: 'spice', notes: 'Essential for signature Chettinad aroma' },
          { id: 'cc-4', name: 'Fennel Seeds (Sombu)', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'cc-5', name: 'Star Anise & Cinnamon', amount: 2, unit: 'pieces', category: 'spice' },
          { id: 'cc-6', name: 'Small Shallots', amount: 1.5, unit: 'cups', category: 'vegetable' },
          { id: 'cc-7', name: 'Cold-Pressed Sesame (Gingelly) Oil', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'cc-8', name: 'Curry Leaves', amount: 3, unit: 'sprigs', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Kalpasi (Stone Flower)',
            substitute: 'Pinch of Mace (Javitri) and extra black pepper',
            category: 'spice',
            ratio: '1:1',
            culinaryEffect: 'Provides woodsy, warm undertones when stone flower is unavailable.',
            authenticityNote: 'Kalpasi is unique to Chettinad, but mace offers similar warm complexity.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Dry roast black peppercorns, fennel seeds, coriander seeds, cumin, star anise, and kalpasi in a pan until fragrant. Coarsely powder in a spice grinder.',
            timerSeconds: 240,
            timerLabel: 'Roast Chettinad Spices'
          },
          {
            stepNumber: 2,
            instruction: 'Heat gingelly oil in a heavy cast iron kadai. Sauté whole shallots, ginger-garlic paste, and curry leaves until golden.',
            timerSeconds: 360,
            timerLabel: 'Sauté Shallots'
          },
          {
            stepNumber: 3,
            instruction: 'Add chicken pieces and 1 chopped country tomato. Sear on high heat for 5 minutes until chicken turns white.',
            timerSeconds: 300,
            timerLabel: 'Sear Chicken'
          },
          {
            stepNumber: 4,
            instruction: 'Add half of the freshly roasted spice blend, turmeric, and 1 tsp rock salt. Mix well, cover, and cook on medium for 12 minutes without adding extra water.',
            timerSeconds: 720,
            timerLabel: 'Cook Chicken in Juices'
          },
          {
            stepNumber: 5,
            instruction: 'Uncover kadai, increase flame to high, and add the remaining Chettinad pepper spice blend. Roast vigorously for 5-7 minutes until the gravy reduces to a glossy dark masala coating the chicken.',
            timerSeconds: 360,
            timerLabel: 'Roast to Sukka Finish'
          },
          {
            stepNumber: 6,
            instruction: 'Toss with fresh curry leaves and serve steaming hot.',
            techniqueTip: 'Finishing with raw crushed pepper in the final 3 minutes preserves volatile pungent piperine.'
          }
        ],
        proTips: ['Gingelly (sesame) oil balances the heat of black peppercorns.'],
        servingSuggestions: ['Malabar Parotta', 'Steamed Rice with Rasam', 'Dosa'],
        whyThisDiffers: 'Features a dark dry roast powered by stone flower (kalpasi) and fresh Tellicherry black peppercorns rather than red chilli powder.'
      }
    ]
  },
  {
    id: 'coastal-fish-curry',
    name: 'Coastal Fish Specialties (Nellore Pulusu & Meen Moilee)',
    teluguName: 'చేపల పులుసు & మీన్ మొయిలీ',
    hindiName: 'मछली करी और मीन मोइली',
    tamilName: 'மீன் குழம்பு & மீன் மொய்லி',
    category: 'Coastal & Seafood',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The pinnacle of coastal peninsular fish mastery: sharp tamarind earthenware curries and fragrant coconut milk stews.',
    culturalPhilosophy: 'Coastal culinary traditions treat fresh catch with deep regional respect: Nellore simmers river fish in earthenware pots with aged tamarind and fenugreek, ripening in flavor over 24 hours; while Kerala’s backwaters poach pearl spot in velvet coconut milk.',
    variations: [
      {
        id: 'fish-nellore-chepala-pulusu',
        versionTitle: 'Nellore Chepala Pulusu (Tangy Earthen Earthenware Fish Curry)',
        tagline: 'Legendary Andhra clay-pot fish curry simmered in aged tamarind gravy with fenugreek and shallots.',
        regionalLineage: {
          district: 'Nellore',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Nellore along the Bay of Bengal and Pennar river is revered across India for this pungent, sour, spicy fish curry that famously tastes twice as good the next day.',
          traditionalVessel: 'Unbaked Earthen Clay Pot (Kundha)'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 25,
          passiveTimeMin: 120,
          techniqueComplexity: 'Moderate',
          justification: 'Requires delicate handling of fragile fish steaks, balancing intense tamarind sourness with roasted fenugreek bitterness, and cooking in earthenware where residual heat continues cooking.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 4,
        nutritionFacts: {
          servingSize: '1 Fish Steak with Gravy (approx. 230g)',
          calories: 270,
          proteinGrams: 28,
          carbsGrams: 10,
          fatGrams: 13,
          fiberGrams: 2,
          sodiumMg: 410,
          dietaryHighlights: ['Omega-3 Fatty Acids', 'Lean Marine Protein', 'Aged Antioxidants']
        },
        ingredients: [
          { id: 'ncp-1', name: 'Freshwater Fish Steaks (Korrameenu / Murrel or Rohu)', amount: 600, unit: 'grams', category: 'protein' },
          { id: 'ncp-2', name: 'Old Aged Tamarind (Nalla Chintapandu)', amount: 60, unit: 'grams', category: 'spice', notes: 'Soaked in 2 cups warm water' },
          { id: 'ncp-3', name: 'Fenugreek Seeds (Menthulu)', amount: 1, unit: 'tsp', category: 'spice', notes: 'Dry roasted and ground' },
          { id: 'ncp-4', name: 'Shallots & Green Chillies', amount: 1.5, unit: 'cups', category: 'vegetable' },
          { id: 'ncp-5', name: 'Guntur Red Chilli Powder', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'ncp-6', name: 'Cold-Pressed Groundnut Oil', amount: 4, unit: 'tbsp', category: 'oil' }
        ],
        substitutions: [
          {
            original: 'Murrel / Rohu Fish',
            substitute: 'Kingfish (Surmai) or Salmon steaks',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Firm flesh holds up beautifully to high acid tamarind bath.',
            authenticityNote: 'Kingfish is widely favored in coastal Nellore dhabas.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Dry roast fenugreek seeds and cumin in a small skillet until fragrant and golden brown. Grind to a fine powder (Menti Podi).',
            timerSeconds: 180,
            timerLabel: 'Roast Menti Podi'
          },
          {
            stepNumber: 2,
            instruction: 'Extract thick tamarind pulp with 2.5 cups water. Strain out all fiber and seeds.',
            timerSeconds: 300,
            timerLabel: 'Extract Tamarind'
          },
          {
            stepNumber: 3,
            instruction: 'Heat groundnut oil in an earthenware clay pot. Add mustard seeds, methi seeds, slit green chillies, and shallots. Sauté until translucent.',
            timerSeconds: 360,
            timerLabel: 'Sauté Shallots in Clay Pot'
          },
          {
            stepNumber: 4,
            instruction: 'Pour in the tamarind extract, add chilli powder, turmeric, and rock salt. Bring to a vigorous rolling boil for 10 minutes until raw tamarind aroma disappears.',
            timerSeconds: 600,
            timerLabel: 'Boil Tamarind Gravy (10 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Gently slide fish steaks into the boiling gravy in a single layer. Sprinkle the ground menti podi over top. Swirl the clay pot using handles—never stir with a spoon.',
            techniqueTip: 'Stirring fish with metal spoons breaks tender steaks; always swirl the pot by its handles.'
          },
          {
            stepNumber: 6,
            instruction: 'Cover and simmer on low heat for 10-12 minutes. Turn off heat and let rest at room temperature for at least 3-4 hours (or overnight) before serving.',
            timerSeconds: 720,
            timerLabel: 'Simmer Fish (12 Mins)'
          }
        ],
        proTips: ['Nellore Pulusu is famously known as "Roju Pulusu" because flavors mature and deeply penetrate the fish after 24 hours.'],
        servingSuggestions: ['Hot Steamed Rice with Ghee', 'Next-Day Leftover Breakfast with Dosa'],
        whyThisDiffers: 'Prepared in earthen clay pots with aged black tamarind and finished with roasted fenugreek powder without any coconut or dairy.'
      },
      {
        id: 'fish-kerala-meen-moilee',
        versionTitle: 'Kerala Meen Moilee (Travancore Coconut Stew)',
        tagline: 'Gentle, aromatic backwater fish stew simmered in fresh pressed coconut milk with ginger and green chillies.',
        regionalLineage: {
          district: 'Kottayam & Alleppey',
          region: 'South Indian',
          state: 'Kerala',
          heritageContext: 'Created in Syrian Christian kitchens of coastal Kerala for Portuguese and British traders who sought rich spice fragrance without tongue-searing heat.',
          traditionalVessel: 'Heavy Cast Iron or Soapstone Uruli'
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 5,
          activeTimeMin: 20,
          passiveTimeMin: 10,
          techniqueComplexity: 'Low',
          justification: 'Straightforward gentle simmering of fish in two extractions of coconut milk with no heavy masalas to grind.'
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 18,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '1 Serving with Coconut Broth (approx. 220g)',
          calories: 310,
          proteinGrams: 26,
          carbsGrams: 5,
          fatGrams: 21,
          fiberGrams: 1,
          sodiumMg: 360,
          dietaryHighlights: ['Healthy Coconut MCTs', 'High Omega-3', 'Dairy Free']
        },
        ingredients: [
          { id: 'kmm-1', name: 'Fish Fillets / Steaks (Pearl Spot / Seer / Pomfret)', amount: 500, unit: 'grams', category: 'protein' },
          { id: 'kmm-2', name: 'Thin Coconut Milk (Second extract)', amount: 1.5, unit: 'cups', category: 'dairy' },
          { id: 'kmm-3', name: 'Thick Coconut Milk (First extract)', amount: 0.75, unit: 'cup', category: 'dairy' },
          { id: 'kmm-4', name: 'Ginger (Julienned)', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'kmm-5', name: 'Green Chillies (Slit lengthwise)', amount: 4, unit: 'pieces', category: 'spice' },
          { id: 'kmm-6', name: 'Cold-Pressed Coconut Oil', amount: 2, unit: 'tbsp', category: 'oil' },
          { id: 'kmm-7', name: 'Curry Leaves & Tomato slices', amount: 2, unit: 'sprigs', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Seer Fish',
            substitute: 'King Prawns or Firm Tofu',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Equally luscious absorption of coconut milk broth.',
            authenticityNote: 'Prawn Moilee is a revered Travancore classic.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Lightly marinate fish in turmeric, pinch of pepper, and salt for 10 minutes.',
            timerSeconds: 600,
            timerLabel: 'Quick Marinate'
          },
          {
            stepNumber: 2,
            instruction: 'Heat coconut oil in a pan. Sauté mustard seeds, curry leaves, julienned ginger, garlic slices, and slit green chillies for 2 minutes until aromatic.',
            timerSeconds: 120,
            timerLabel: 'Sauté Aromatics'
          },
          {
            stepNumber: 3,
            instruction: 'Add sliced onions and cook until translucent. Pour in the thin coconut milk and simmer gently.',
            timerSeconds: 240,
            timerLabel: 'Simmer Thin Milk'
          },
          {
            stepNumber: 4,
            instruction: 'Gently place fish pieces and tomato wedges into the simmering milk. Simmer covered on low heat for 7-8 minutes.',
            timerSeconds: 480,
            timerLabel: 'Poach Fish (8 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Pour in the thick coconut milk. Swirl the pan and bring just to the threshold of a gentle boil; turn off flame immediately.',
            techniqueTip: 'Never boil thick first-extract coconut milk, or the natural emulsion curdles.'
          }
        ],
        proTips: ['Use cold-pressed virgin coconut oil for true Kerala backwater aroma.'],
        servingSuggestions: ['Lacy Kerala Appams', 'Idiyappam (String Hoppers)', 'Steamed Rice'],
        whyThisDiffers: 'Uses sweet velvety coconut milk and gentle julienned aromatics rather than sour tamarind or red chilli paste.'
      }
    ]
  },
  {
    id: 'chole-chana',
    name: 'Artisanal Chole (Pindi & Sadar Bazaar Chickpeas)',
    teluguName: 'శనగల కూర (చోలే)',
    hindiName: 'अमृतसरी पिंडी छोले और चना मसाला',
    tamilName: 'சென்னா மசாலா',
    category: 'Lentils & Gravies',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Slow-simmered chickpeas infused with whole spices, dried pomegranate seeds, and aromatic black tea.',
    culturalPhilosophy: 'Chole represents the pride of Punjab and Old Delhi: Amritsar crafts dark, semi-dry Pindi Chole cooked with tea leaves, anardana, and carom; while Delhi Sadar Bazaar masters tangy street-style chana drenched in amchur and ginger juliennes.',
    variations: [
      {
        id: 'chole-amritsari-pindi',
        versionTitle: 'Amritsari Pindi Chole (Blackened Tea & Anardana Style)',
        tagline: 'Dark, rustic, onion-and-garlic-free chickpeas simmered with black tea, wild pomegranate seeds, and sizzling ghee tadka.',
        regionalLineage: {
          district: 'Rawalpindi & Amritsar',
          region: 'North Indian',
          state: 'Punjab',
          heritageContext: 'Created originally in Rawalpindi before 1947 and preserved across Amritsari heritage dhabas, where tea leaves impart the distinctive deep ebony hue and anardana provides earthy sourness.',
          traditionalVessel: 'Heavy Cast Iron Kadai'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 480,
          techniqueComplexity: 'Moderate',
          justification: 'Requires managing 8-hour chickpea hydration, simmering with a muslin tea spice pouch (potli) in iron vessels to achieve natural oxidation, and tempering with sizzling carom seeds and ginger.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 40,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '1 Bowl Pindi Chole (approx. 220g)',
          calories: 295,
          proteinGrams: 14,
          carbsGrams: 42,
          fatGrams: 8,
          fiberGrams: 11,
          sodiumMg: 420,
          dietaryHighlights: ['High Soluble Fiber', 'Plant Protein Superfood', 'Complex Carbs', 'Zero Cholesterol']
        },
        ingredients: [
          { id: 'pc-1', name: 'Kabuli Chana (Chickpeas)', amount: 2, unit: 'cups', category: 'lentil', notes: 'Soaked 8 hours' },
          { id: 'pc-2', name: 'Black Tea Leaves (in Muslin Potli)', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'pc-3', name: 'Anardana (Dried Pomegranate Seeds)', amount: 2, unit: 'tbsp', category: 'spice', notes: 'Roasted & coarsely ground' },
          { id: 'pc-4', name: 'Ajwain (Carom Seeds)', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'pc-5', name: 'Coriander Seeds & Cumin', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'pc-6', name: 'Ginger Juliennes', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'pc-7', name: 'Desi Ghee or Mustard Oil', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'pc-8', name: 'Kala Namak (Black Salt)', amount: 1, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Anardana (Pomegranate Seeds)',
            substitute: 'Amchur (Dry Mango Powder) + dash of tamarind',
            category: 'souring',
            ratio: '1:1',
            culinaryEffect: 'Provides tartness, though anardana yields a darker, fruitier acidity.',
            authenticityNote: 'Amchur is the common substitute across North Indian household kitchens.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak chickpeas in water with 0.5 tsp rock salt for 8 hours. Pressure cook with a muslin pouch containing tea leaves, black cardamom, and cinnamon for 6 whistles until melt-in-mouth soft.',
            timerSeconds: 1500,
            timerLabel: 'Pressure Cook Chole (25 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Discard the tea potli. Drain chickpeas, reserving the dark cooking broth.',
            techniqueTip: 'Cooking in an iron kadai reacts naturally with tea tannins, intensifying the rich black luster.'
          },
          {
            stepNumber: 3,
            instruction: 'Dry roast anardana, cumin, coriander seeds, and black peppercorns. Grind into coarse dark Pindi masala.',
            timerSeconds: 240,
            timerLabel: 'Roast Pindi Masala'
          },
          {
            stepNumber: 4,
            instruction: 'Place boiled chickpeas into an iron kadai. Sprinkle ground Pindi masala, black salt, amchur, and roasted cumin powder over the top without stirring.',
            techniqueTip: 'Coating warm chana directly with dry spices allows flavor to penetrate deeply before tempering.'
          },
          {
            stepNumber: 5,
            instruction: 'Heat ghee in a small pan until smoking. Add carom seeds (ajwain), sliced ginger juliennes, and green chillies. Sizzle for 30 seconds.',
            timerSeconds: 30,
            timerLabel: 'Sizzling Ghee Tadka'
          },
          {
            stepNumber: 6,
            instruction: 'Pour the boiling hot ghee directly over the spiced chickpeas. Add 0.5 cup reserved dark broth, mash 2 tbsp chickpeas to create body, and simmer 10 minutes.',
            timerSeconds: 600,
            timerLabel: 'Simmer Pindi Chole (10 Mins)'
          }
        ],
        proTips: ['Never mash all the chickpeas; mashing just 10% creates the velvet body while retaining intact tender pearls.'],
        servingSuggestions: ['Amritsari Kulcha', 'Puffy Bhature', 'Raw Pickled Onions with Green Chillies'],
        whyThisDiffers: 'Dark ebony color from tea tannins, flavored with tangy anardana and ajwain without onions, garlic, or tomatoes.'
      }
    ]
  },
  {
    id: 'pongal-khichdi',
    name: 'Pongal & Khichdi (Comfort Rice & Moong)',
    teluguName: 'కట్టె పొంగలి',
    hindiName: 'वेन पोंगल और खिचड़ी',
    tamilName: 'வெண் பொங்கல்',
    category: 'Breakfast',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The ultimate temple and home comfort: tender rice and split yellow moong cooked to silk and tempered in golden ghee.',
    culturalPhilosophy: 'Both Andhra and Tamil Nadu hold Pongal as the sacred dish of harvest and temple sanctums: Andhra Katte Pongali celebrates generous whole Tellicherry peppercorns and ginger; Tamil Ven Pongal focuses on melting ghee-slicked silkiness.',
    variations: [
      {
        id: 'pongal-andhra-katte',
        versionTitle: 'Andhra Katte Pongali (Temple Ghee & Pepper Pongal)',
        tagline: 'Sacred temple preparation of slow-cooked rice and roasted moong dal tempered with whole black pepper, ginger, and golden cashews.',
        regionalLineage: {
          district: 'Tirupati & Chittoor',
          region: 'Telugu',
          state: 'Andhra Pradesh',
          heritageContext: 'Served as dawn Prasadam across Telugu temple sanctums, balancing the digestive warmth of black pepper with rich A2 desi ghee.',
          traditionalVessel: 'Heavy Brass Bronze Uruli'
        },
        difficulty: {
          level: 'Easy',
          stepsCount: 5,
          activeTimeMin: 15,
          passiveTimeMin: 20,
          techniqueComplexity: 'Low',
          justification: 'One-pot pressure or pot cooking requiring only roasting moong dal to nutty golden aroma and blooming spices in hot ghee.'
        },
        servings: 4,
        prepTimeMin: 10,
        cookTimeMin: 20,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '1 Bowl Katte Pongali (approx. 220g)',
          calories: 320,
          proteinGrams: 9,
          carbsGrams: 48,
          fatGrams: 11,
          fiberGrams: 4,
          sodiumMg: 340,
          dietaryHighlights: ['Ayurvedic Sattvic', 'Digestive Black Pepper', 'Complete Amino Acid Profile']
        },
        ingredients: [
          { id: 'kp-1', name: 'Raw Sona Masoori Rice', amount: 1, unit: 'cup', category: 'grain' },
          { id: 'kp-2', name: 'Split Yellow Moong Dal (Pesara Pappu)', amount: 0.5, unit: 'cup', category: 'lentil', notes: 'Dry roasted until fragrant' },
          { id: 'kp-3', name: 'Whole Black Peppercorns (Miriyalu)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'kp-4', name: 'Cumin Seeds (Jeelakarra)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'kp-5', name: 'Fresh Ginger (crushed)', amount: 1.5, unit: 'tbsp', category: 'aromatic' },
          { id: 'kp-6', name: 'Whole Cashews (Jeedipappu)', amount: 12, unit: 'pieces', category: 'grain' },
          { id: 'kp-7', name: 'Pure Desi Ghee', amount: 4, unit: 'tbsp', category: 'dairy' },
          { id: 'kp-8', name: 'Curry Leaves & Hing', amount: 2, unit: 'sprigs', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Pure Desi Ghee',
            substitute: 'Cold-Pressed Coconut Oil or Sesame Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan alternative with clean soothing mouthfeel.',
            authenticityNote: 'Desi ghee is traditional in temples, but coconut oil is used in coastal homes.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Dry roast yellow moong dal in a skillet on medium heat until golden and nutty aroma fills the kitchen.',
            timerSeconds: 240,
            timerLabel: 'Roast Moong Dal (4 Mins)'
          },
          {
            stepNumber: 2,
            instruction: 'Wash rice and roasted moong dal together. Add 4.5 cups water and 1 tsp rock salt. Pressure cook for 4-5 whistles until soft and mushy.',
            timerSeconds: 900,
            timerLabel: 'Pressure Cook (15 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Heat desi ghee in a heavy kadai. Add whole cashews and fry until light golden.',
            timerSeconds: 120,
            timerLabel: 'Golden Cashews'
          },
          {
            stepNumber: 4,
            instruction: 'Add whole black peppercorns, cumin seeds, grated ginger, curry leaves, and a generous pinch of asafoetida (hing). Let peppercorns crackle.',
            techniqueTip: 'Whole peppercorns bloomed in ghee release sweet, fragrant heat without burning the tongue.'
          },
          {
            stepNumber: 5,
            instruction: 'Pour the sizzling ghee tempering directly into the cooked rice and dal. Mix gently until glossy and velvety.',
            techniqueTip: 'Add 0.5 cup warm water or milk if Pongal thickens upon standing to restore molten silkiness.'
          }
        ],
        proTips: ['Dry roasting moong dal prevents the porridge from turning sticky or gummy.'],
        servingSuggestions: ['Coconut Chutney', 'Brinjal Gothsu', 'Medu Vada'],
        whyThisDiffers: 'Features a higher ratio of black peppercorns, ginger, and roasted dal in traditional Andhra temple style.'
      }
    ]
  },
  {
    id: 'bengali-macher-jhol',
    name: 'Bengali Fish Specialties (Shorshe Ilish & Macher Jhol)',
    teluguName: 'బెంగాలీ ఆవాల చేపల కూర',
    hindiName: 'बंगाली माछेर झोल और सरसों मछली',
    tamilName: 'வங்காள மீன் குழம்பு',
    category: 'Coastal & Seafood',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The soul of Bengal: freshwater fish simmered in pungent cold-pressed mustard oil with yellow mustard paste or delicate nigella kalonji broth.',
    culturalPhilosophy: 'Phase 2 Pan-India culinary mastery: Bengal distinguishes between the fierce, pungent mustard gravy (Shorshe Bata) of the Ghoti tradition and the light, soothing broth (Patla Jhol) seasoned with five-spice Panch Phoron of Bangal heritage.',
    variations: [
      {
        id: 'bengali-shorshe-maach',
        versionTitle: 'Kolkata Shorshe Maach (Pungent Mustard & Green Chilli Fish)',
        tagline: 'River fish steaks enveloped in a sharp, pungent emulsion of freshly ground yellow and black mustard paste in smoking kachi ghani mustard oil.',
        regionalLineage: {
          district: 'Kolkata & Hooghly',
          region: 'Pan-Indian',
          state: 'West Bengal',
          heritageContext: 'The defining dish of Bengali feasts, celebrating freshwater carp (Rohu/Katla) or royal Hilsa (Ilish) cooked with freshly ground mustard seeds.',
          traditionalVessel: 'Heavy Cast Iron Kadai'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 25,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Grinding mustard seeds requires salt and green chillies to suppress natural enzyme bitterness; mustard oil must be heated to the precise smoke point before searing fish.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 20,
        spiceLevel: 4,
        nutritionFacts: {
          servingSize: '1 Fish Steak with Gravy (approx. 220g)',
          calories: 285,
          proteinGrams: 27,
          carbsGrams: 6,
          fatGrams: 17,
          fiberGrams: 2,
          sodiumMg: 390,
          dietaryHighlights: ['Omega-3 Rich', 'Cardioprotective Mustard Isothiocyanates', 'High Protein']
        },
        ingredients: [
          { id: 'bm-1', name: 'Freshwater Fish Steaks (Rohu, Katla, or Salmon)', amount: 600, unit: 'grams', category: 'protein' },
          { id: 'bm-2', name: 'Yellow Mustard Seeds (Shorshe)', amount: 2.5, unit: 'tbsp', category: 'spice' },
          { id: 'bm-3', name: 'Black Mustard Seeds', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'bm-4', name: 'Fresh Green Chillies', amount: 6, unit: 'pieces', category: 'spice' },
          { id: 'bm-5', name: 'Pure Cold-Pressed Mustard Oil (Kachi Ghani)', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'bm-6', name: 'Kalonji (Nigella Seeds)', amount: 0.75, unit: 'tsp', category: 'spice' },
          { id: 'bm-7', name: 'Turmeric Powder & Rock Salt', amount: 1.5, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Kachi Ghani Mustard Oil',
            substitute: 'Extra Virgin Olive Oil mixed with 1 tsp wasabi or mustard powder',
            category: 'oil',
            ratio: '1:1',
            culinaryEffect: 'Recreates pungent sinonasal kick for global cooks where pure food-grade mustard oil is restricted.',
            authenticityNote: 'Standard substitute in the UK and North American diaspora.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Soak yellow and black mustard seeds in warm water with 1 green chilli and 0.5 tsp salt for 20 minutes. Grind to an ultra-silky, luminescent yellow paste.',
            techniqueTip: 'Grinding mustard with salt and green chillies prevents enzyme hydrolysis that turns mustard bitter.'
          },
          {
            stepNumber: 2,
            instruction: 'Rub fish steaks with turmeric and salt. Heat 3 tbsp mustard oil in an iron kadai until smoking and pale yellow, then cool slightly.',
            timerSeconds: 180,
            timerLabel: 'Smoke Mustard Oil'
          },
          {
            stepNumber: 3,
            instruction: 'Lightly pan-fry fish steaks for 1.5 minutes per side. Do not brown heavily; keep the flesh delicate and moist. Remove to a warm plate.',
            timerSeconds: 180,
            timerLabel: 'Gentle Sear'
          },
          {
            stepNumber: 4,
            instruction: 'In the remaining oil, temper nigella seeds (kalonji) and slit green chillies until fragrant. Add 1 cup warm water and turmeric.',
            timerSeconds: 60,
            timerLabel: 'Temper Kalonji'
          },
          {
            stepNumber: 5,
            instruction: 'Stir in the ground mustard paste and bring to a gentle simmer. Gently slide the seared fish steaks into the sauce. Simmer covered for 5 minutes.',
            timerSeconds: 300,
            timerLabel: 'Simmer Fish in Mustard'
          },
          {
            stepNumber: 6,
            instruction: 'Drizzle 1 tbsp raw virgin mustard oil and top with fresh slit green chillies. Cover with lid for 2 minutes to trap the pungent aroma before serving.',
            techniqueTip: 'Raw mustard oil finish (Kancha Tel) is the signature of true Kolkata home cooking.'
          }
        ],
        proTips: ['Strain mustard paste through a sieve if using older seeds to avoid rough hulls.'],
        servingSuggestions: ['Steamed Gobindobhog or Basmati Rice', 'Green Chillies on the side'],
        whyThisDiffers: 'Features an unheated raw mustard oil emulsion and freshly ground pungent mustard paste rather than cooked onion-tomato pastes.'
      }
    ]
  },
  {
    id: 'kashmiri-rogan-josh',
    name: 'Kashmiri Wazwan Rogan Josh (Slow Braised Lamb)',
    teluguName: 'కాశ్మీరీ రోగన్ జోష్',
    hindiName: 'कश्मीरी रोगन जोश',
    tamilName: 'காஷ்மீரி ரோகன் ஜோஷ்',
    category: 'Royal Curries',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The crown jewel of Himalayan gastronomy: tender lamb slow-braised in aromatic Kashmiri chillies, dried ginger, and wild cockscomb.',
    culturalPhilosophy: 'Phase 2 Himalayan heritage: Kashmir presents two legendary expressions of Rogan Josh—Wazwan Muslim cooks use shallot paste (pran) and maval flower, while Kashmiri Pandits achieve royal complexity using asafoetida (hing), whole fennel (saunf), and sour curd without onions or garlic.',
    variations: [
      {
        id: 'rogan-josh-pandit',
        versionTitle: 'Kashmiri Pandit Rogan Josh (Saunf & Soonth Heritage)',
        tagline: 'Ancient onion-free, garlic-free lamb braised in mustard oil with ground fennel, dry ginger, and whipped curd.',
        regionalLineage: {
          district: 'Srinagar Valley',
          region: 'North Indian',
          state: 'Jammu & Kashmir',
          heritageContext: 'Preserved by Kashmiri Pandits over millennia, featuring brilliant natural scarlet coloration from mild Kashmiri chillies and digestive warming spices.',
          traditionalVessel: 'Heavy Brass Degchi'
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 40,
          passiveTimeMin: 60,
          techniqueComplexity: 'High',
          justification: 'Requires whisking yogurt into hot mustard oil without splitting the curd, regulating whole spice extraction, and slow braising bone-in mutton until marrow infuses the scarlet gravy.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 65,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '1 Bowl Lamb Curry (approx. 240g)',
          calories: 390,
          proteinGrams: 34,
          carbsGrams: 6,
          fatGrams: 26,
          fiberGrams: 2,
          sodiumMg: 430,
          dietaryHighlights: ['Collagen Rich Broth', 'Digestive Saunf & Ginger', 'High Protein', 'Keto Compliant']
        },
        ingredients: [
          { id: 'krj-1', name: 'Bone-in Mutton / Lamb (Shoulder or shank)', amount: 800, unit: 'grams', category: 'protein' },
          { id: 'krj-2', name: 'Pure Mustard Oil', amount: 4, unit: 'tbsp', category: 'oil' },
          { id: 'krj-3', name: 'Kashmiri Red Chilli Powder (Degi Mirch)', amount: 2.5, unit: 'tbsp', category: 'spice' },
          { id: 'krj-4', name: 'Ground Fennel Seeds (Saunf Powder)', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'krj-5', name: 'Dry Ginger Powder (Soonth)', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'krj-6', name: 'Whisked Plain Whole Curd (Dahi)', amount: 0.75, unit: 'cup', category: 'dairy' },
          { id: 'krj-7', name: 'Asafoetida (Hing dissolved in water)', amount: 0.5, unit: 'tsp', category: 'spice' },
          { id: 'krj-8', name: 'Black & Green Cardamoms, Cloves, Cinnamon', amount: 6, unit: 'pieces', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Bone-in Mutton',
            substitute: 'Portobello Mushrooms, Jackfruit, or Lamb Chops',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Raw jackfruit (Kathal) absorbs the scarlet fennel gravy with remarkable meat-like chew.',
            authenticityNote: 'Kathal Rogan Josh is a beloved Kashmiri Pandit vegetarian feast dish.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Heat mustard oil in a heavy degchi to smoking point. Cool slightly, then add cloves, black cardamoms, and green cardamoms until they swell.',
            timerSeconds: 120,
            timerLabel: 'Bloom Whole Spices'
          },
          {
            stepNumber: 2,
            instruction: 'Add bone-in mutton pieces and sear on medium-high heat for 8-10 minutes until meat develops a light browned crust and releases natural juices.',
            timerSeconds: 600,
            timerLabel: 'Brown Lamb (10 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'Add dissolved hing water and 1 tbsp Kashmiri chilli powder mixed with 2 tbsp water to prevent scorching. Sizzle vigorously for 2 minutes.',
            timerSeconds: 120,
            timerLabel: 'Add Hing & Chilli'
          },
          {
            stepNumber: 4,
            instruction: 'Turn heat to low. Whisk curd vigorously and add 1 tablespoon at a time into the pot, stirring continuously in one direction until completely emulsified.',
            techniqueTip: 'Stirring continuously in one direction prevents the yogurt proteins from curdling in hot oil.'
          },
          {
            stepNumber: 5,
            instruction: 'Add the remaining Kashmiri chilli powder, ground fennel (saunf), dry ginger powder (soonth), and rock salt. Fry until scarlet oil rises to the surface.',
            timerSeconds: 300,
            timerLabel: 'Bloom Spices'
          },
          {
            stepNumber: 6,
            instruction: 'Add 2 cups warm water. Cover tightly and simmer on low heat for 45-50 minutes (or 4 whistles in pressure cooker) until the meat is fork-tender and falling off the bone.',
            timerSeconds: 2700,
            timerLabel: 'Slow Braise Lamb (45 Mins)'
          },
          {
            stepNumber: 7,
            instruction: 'Finish with a pinch of royal saffron infused in warm water and crushed black cardamom powder. Rest 15 minutes before serving.',
            techniqueTip: 'The signature red gloss ("Rogan") emerges when the oil separates from the braised spices.'
          }
        ],
        proTips: ['Authentic Kashmiri Pandit Rogan Josh strictly avoids onions, garlic, and tomatoes.'],
        servingSuggestions: ['Steamed Kashmiri Rice', 'Tsot Flatbread', 'Mooli Chutney (Doone Chetin)'],
        whyThisDiffers: 'Features a pure fennel and dry ginger braise in mustard oil and curd without any onion, garlic, or tomato paste.'
      }
    ]
  },
  {
    id: 'gujarat-dhokla-undhiyu',
    name: 'Gujarati Specialties (Surati Dhokla & Undhiyu)',
    teluguName: 'గుజరాతీ డోక్లా & ఉంధియు',
    hindiName: 'गुजराती खमन ढोकला और उंधियू',
    tamilName: 'குஜராத்தி டோக்ளா',
    category: 'Breakfast',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The pride of western India: feather-light steamed Khaman Dhokla and slow-cooked earthen-pot winter vegetable Undhiyu.',
    culturalPhilosophy: 'Phase 2 Western India terroir: Gujarat balances sweet, sour, and savory with exquisite finesse. Khaman Dhokla transforms simple Bengal gram into a porous, lemon-tempered sponge, while Surat’s winter Undhiyu layers sweet purple yam with fenugreek dumplings.',
    variations: [
      {
        id: 'dhokla-surati-khaman',
        versionTitle: 'Surati Nylon Khaman Dhokla (Steamed Gram Sponge)',
        tagline: 'Feather-light, porous steamed chickpea sponge infused with sweet-tangy lemon water, crackling mustard, and green chillies.',
        regionalLineage: {
          district: 'Surat & Ahmedabad',
          region: 'Pan-Indian',
          state: 'Gujarat',
          heritageContext: 'Perfected in Surat’s historic street lanes, transforming soaked chana dal into an airy honeycomb sponge that melts on the tongue.',
          traditionalVessel: 'Tiered Brass or Stainless Dhokla Steamer'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 20,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Demands precise batter hydration, temperature activation of leavening (fruit salt/citric acid), and soaking the hot steamed cake with seasoned sweet-tart tempering water.'
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 20,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '2 Squares (approx. 160g)',
          calories: 210,
          proteinGrams: 8,
          carbsGrams: 36,
          fatGrams: 5,
          fiberGrams: 4,
          sodiumMg: 380,
          dietaryHighlights: ['Steamed & Low Calorie', 'High Plant Protein', 'Gluten Free Compatible', 'Vegetarian Superfood']
        },
        ingredients: [
          { id: 'gd-1', name: 'Besan (Fine Chickpea Gram Flour)', amount: 2, unit: 'cups', category: 'grain' },
          { id: 'gd-2', name: 'Citric Acid (Nimbu ke Phool) or Lemon Juice', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'gd-3', name: 'Ginger-Green Chilli Paste', amount: 1.5, unit: 'tbsp', category: 'aromatic' },
          { id: 'gd-4', name: 'Fruit Salt (Eno) or Baking Soda', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'gd-5', name: 'Mustard Seeds (Rai)', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'gd-6', name: 'Green Chillies (Slit lengthwise)', amount: 4, unit: 'pieces', category: 'spice' },
          { id: 'gd-7', name: 'White Sesame Seeds (Til)', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'gd-8', name: 'Groundnut Oil', amount: 2, unit: 'tbsp', category: 'oil' }
        ],
        substitutions: [
          {
            original: 'Citric Acid',
            substitute: 'Fresh Lemon Juice with pinch of sugar',
            category: 'souring',
            ratio: '1:1',
            culinaryEffect: 'Natural clean sourness that activates leavening.',
            authenticityNote: 'Everyday home standard in Gujarat.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Sift besan flour into a bowl. Whisk with 1.25 cups water, citric acid, 1 tbsp sugar, ginger-chilli paste, turmeric, and 1 tbsp oil until smooth and lump-free. Rest 10 minutes.',
            timerSeconds: 600,
            timerLabel: 'Batter Rest'
          },
          {
            stepNumber: 2,
            instruction: 'Grease an 8-inch steaming tray with oil. Boil water in the steamer base on high heat.',
            timerSeconds: 120,
            timerLabel: 'Prep Steamer'
          },
          {
            stepNumber: 3,
            instruction: 'Add fruit salt (Eno) to the rested batter with 1 tsp water. Whisk briskly in one direction for 30 seconds until the batter turns frothy, pale, and doubles in volume.',
            techniqueTip: 'Whisk in one direction only to trap maximum micro-bubbles; steam immediately after foaming.'
          },
          {
            stepNumber: 4,
            instruction: 'Pour batter into greased tray and steam covered on high flame for 15-18 minutes without opening the lid.',
            timerSeconds: 1020,
            timerLabel: 'Steam Dhokla (17 Mins)'
          },
          {
            stepNumber: 5,
            instruction: 'Prepare tempering syrup: Heat 1 tbsp oil, crackle mustard seeds, sesame seeds, hing, green chillies, and curry leaves. Add 0.75 cup water, 1 tbsp sugar, and 1 tsp lemon juice. Bring to a boil.',
            timerSeconds: 180,
            timerLabel: 'Boil Tempering Syrup'
          },
          {
            stepNumber: 6,
            instruction: 'Let dhokla cool for 5 minutes, cut into squares, and spoon the warm sweet-tangy tempering syrup over the sponge. Garnish with fresh coconut and coriander.',
            techniqueTip: 'Spoon warm syrup onto warm dhokla; the porous sponge drinks the liquid to become juicy and succulent.'
          }
        ],
        proTips: ['Never open the steamer during the first 12 minutes, or trapped steam escapes and the center deflates.'],
        servingSuggestions: ['Papaya Sambharo', 'Raw Mango Chutney', 'Fried Green Chillies'],
        whyThisDiffers: 'Features an airy, honeycomb steamed besan crumb infused with sweet-sour citrus tempering water rather than dense lentil batter.'
      }
    ]
  },
  {
    id: 'rajasthani-dal-baati',
    name: 'Rajasthani Dal Baati Churma & Ker Sangri',
    teluguName: 'రాజస్థానీ దాల్ బాతి',
    hindiName: 'राजस्थानी दाल बाटी चूरमा',
    tamilName: 'ராஜஸ்தானி பருப்பு பாட்டி',
    category: 'Rice Specialties',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The majestic feast of the Thar desert: fire-roasted whole-wheat baatis steeped in desi ghee, spicy panchmel dal, and sweet churma.',
    culturalPhilosophy: 'Phase 2 Thar Desert heritage: Born out of Rajput warrior camps where bread could be baked under hot desert sand and preserved for weeks. Served with five-lentil Panchmel Dal tempered in pure cow ghee and clove-scented churma.',
    variations: [
      {
        id: 'baati-marwari-panchmel',
        versionTitle: 'Marwari Dal Baati (Fire-Roasted Ghee Soaked Style)',
        tagline: 'Crispy-crusted, tender-centered roasted wheat dumplings crushed and soaked in hot desi ghee with five-lentil Panchmel Dal.',
        regionalLineage: {
          district: 'Jodhpur & Mewar',
          region: 'North Indian',
          state: 'Rajasthan',
          heritageContext: 'Historic food of Rajput warriors and royal desert caravans, offering maximum calories, storage stability, and protein in arid terrain.',
          traditionalVessel: 'Earthen Tandoor, Gas Baati Oven, or Cast Iron Kadai'
        },
        difficulty: {
          level: 'Hard',
          stepsCount: 7,
          activeTimeMin: 45,
          passiveTimeMin: 30,
          techniqueComplexity: 'Artisanal',
          justification: 'Requires kneading stiff, coarse whole wheat dough with precise ghee shortening (moyen), slow baking over moderate flame until deep cracks form, and dipping cracked hot baatis into molten ghee.'
        },
        servings: 4,
        prepTimeMin: 25,
        cookTimeMin: 40,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '2 Baatis with 1 Bowl Dal (approx. 280g)',
          calories: 460,
          proteinGrams: 16,
          carbsGrams: 62,
          fatGrams: 18,
          fiberGrams: 8,
          sodiumMg: 410,
          dietaryHighlights: ['Complete Protein Profile', 'Complex Slow-Release Carbs', 'Traditional A2 Ghee Lipids']
        },
        ingredients: [
          { id: 'db-1', name: 'Coarse Whole Wheat Flour (Atta)', amount: 2.5, unit: 'cups', category: 'grain' },
          { id: 'db-2', name: 'Sooji / Semolina', amount: 0.5, unit: 'cup', category: 'grain', notes: 'Gives crisp exterior' },
          { id: 'db-3', name: 'Desi Cow Ghee', amount: 6, unit: 'tbsp', category: 'dairy' },
          { id: 'db-4', name: 'Carom Seeds (Ajwain) & Fennel', amount: 1.5, unit: 'tsp', category: 'spice' },
          { id: 'db-5', name: 'Panchmel Dals (Toor, Moong, Chana, Urad, Masoor)', amount: 1.5, unit: 'cups', category: 'lentil' },
          { id: 'db-6', name: 'Dry Red Chillies, Cloves, Cardamom', amount: 6, unit: 'pieces', category: 'spice' },
          { id: 'db-7', name: 'Asafoetida & Mustard Seeds', amount: 1, unit: 'tsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Desi Cow Ghee',
            substitute: 'Virgin Coconut Oil or Roasted Sesame Oil',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Vegan formulation that provides rich shortening and crisp shell.',
            authenticityNote: 'Traditional Rajasthani pride relies on desi cow ghee, but sesame oil was historically used by desert pastoralists.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Mix coarse wheat flour, semolina, carom seeds (ajwain), salt, and 3 tbsp melted ghee. Rub with fingertips until breadcrumb texture forms.',
            timerSeconds: 240,
            timerLabel: 'Rub Moyen into Flour'
          },
          {
            stepNumber: 2,
            instruction: 'Knead with warm water into a very stiff, firm dough. Divide into 8 round balls. Press a light thumb indent into the center of each ball.',
            techniqueTip: 'A stiff dough creates the signature flaky, cracked crust rather than a soft bread roll.'
          },
          {
            stepNumber: 3,
            instruction: 'Preheat baati oven or heavy covered griddle to medium. Place dough balls and roast, turning every 5 minutes, for 25-30 minutes until golden brown with deep cracks.',
            timerSeconds: 1680,
            timerLabel: 'Roast Baatis (28 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Prepare Panchmel Dal: Pressure cook the five soaked dals with turmeric and salt for 4 whistles until soft and creamy.',
            timerSeconds: 900,
            timerLabel: 'Cook Dal'
          },
          {
            stepNumber: 5,
            instruction: 'Temper dal: Heat 2 tbsp ghee, sizzle cloves, cinnamon, dried chillies, cumin, hing, ginger-garlic, and Kashmiri chilli powder. Pour over dal.',
            timerSeconds: 180,
            timerLabel: 'Sizzling Clove Tadka'
          },
          {
            stepNumber: 6,
            instruction: 'Take hot roasted baati, lightly crush between palms with a cloth until it cracks open, and dunk completely into a bowl of molten ghee for 10 seconds.',
            techniqueTip: 'Cracking the hot baati before dipping allows ghee to soak directly into the honeycomb interior.'
          },
          {
            stepNumber: 7,
            instruction: 'Serve hot with spicy Panchmel Dal, garlic chutney, and sweet powdered Churma.',
            techniqueTip: 'Traditional diners crush the baati into the bowl and ladle dal and ghee generously on top.'
          }
        ],
        proTips: ['The indent on the top helps heat penetrate to the core of the dough ball.'],
        servingSuggestions: ['Spicy Lahsun (Garlic) Chutney', 'Sweet Jaggery Churma', 'Kachumber'],
        whyThisDiffers: 'Features stiff fire-roasted dough balls steeped in molten ghee paired with five-lentil Panchmel Dal.'
      }
    ]
  },
  {
    id: 'bihari-litti-chokha',
    name: 'Bihari Litti Chokha (Smoked Sattu & Roasted Mash)',
    teluguName: 'బీహారీ లిట్టి చోఖా',
    hindiName: 'बिहारी लिट्टी चोखा',
    tamilName: 'பீகாரி லிட்டி சோக்கா',
    category: 'Rice Specialties',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The rustic soul of Bihar and eastern Uttar Pradesh: roasted gram sattu dumplings stuffed with spicy mustard oil aromatics and fire-smoked mash.',
    culturalPhilosophy: 'Phase 2 Eastern Heartland: Ancient food of resilience dating back to the Magadha empire. Sattu (roasted Bengal gram flour) provides complete protein, encased in whole wheat and cooked over charcoal or dung cakes, paired with smoky roasted eggplant-tomato Chokha.',
    variations: [
      {
        id: 'litti-patna-sattu',
        versionTitle: 'Patna Smoked Litti with Baingan-Tamatar Chokha',
        tagline: 'Fire-roasted whole wheat globes stuffed with pickle-masala seasoned roasted gram flour, paired with charcoal-roasted eggplant-tomato mash.',
        regionalLineage: {
          district: 'Patna & Bhojpur',
          region: 'North Indian',
          state: 'Bihar',
          heritageContext: 'The indigenous staple of the Gangetic plains, celebrating sattu energized with raw mustard oil, carom, kalonji, and mango pickle spice.',
          traditionalVessel: 'Open Charcoal Grill, Earthen Upla Hearth, or Heavy Kadai'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 35,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Requires roasting whole eggplant and tomatoes directly over open flame to achieve deep woodsmoke char, seasoning sattu with exact moisture so filling stays moist, and sealing dough balls securely.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '2 Littis with Chokha (approx. 260g)',
          calories: 340,
          proteinGrams: 15,
          carbsGrams: 52,
          fatGrams: 9,
          fiberGrams: 10,
          sodiumMg: 410,
          dietaryHighlights: ['High Insoluble Fiber', 'Roasted Sattu Superfood', 'Low Glycemic Index', 'Plant Protein']
        },
        ingredients: [
          { id: 'bl-1', name: 'Whole Wheat Flour (Atta)', amount: 2, unit: 'cups', category: 'grain' },
          { id: 'bl-2', name: 'Chana Sattu (Roasted Gram Flour)', amount: 1.5, unit: 'cups', category: 'grain' },
          { id: 'bl-3', name: 'Raw Mustard Oil (Kachi Ghani)', amount: 3, unit: 'tbsp', category: 'oil' },
          { id: 'bl-4', name: 'Mango Pickle Masala (Achar Masala)', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'bl-5', name: 'Ajwain (Carom) & Kalonji (Nigella)', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'bl-6', name: 'Finely Minced Garlic & Ginger', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'bl-7', name: 'Large Eggplant (Bharta Baingan)', amount: 1, unit: 'pieces', category: 'vegetable' },
          { id: 'bl-8', name: 'Ripe Country Tomatoes & Green Chillies', amount: 3, unit: 'pieces', category: 'vegetable' }
        ],
        substitutions: [
          {
            original: 'Chana Sattu',
            substitute: 'Roasted Gram (Pappulu / Dalia) ground finely in a blender',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Provides identical nutty, roasted chickpea aroma anywhere in the world.',
            authenticityNote: 'Universally used by the diaspora across US, UK, and South East Asia.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Prepare Litti stuffing: Mix sattu with minced garlic, ginger, green chillies, fresh coriander, ajwain, kalonji, lemon juice, 2 tbsp raw mustard oil, and 1.5 tbsp mango pickle masala. Sprinkle 2 tbsp water so stuffing holds shape when pressed.',
            techniqueTip: 'Pickle oil and masala provide the indispensable authentic Bihari punch.'
          },
          {
            stepNumber: 2,
            instruction: 'Knead whole wheat flour with water and 1 tsp oil into a soft, pliable dough. Divide into 8 portions.',
            timerSeconds: 300,
            timerLabel: 'Knead Dough'
          },
          {
            stepNumber: 3,
            instruction: 'Flatten each dough ball into a cup, place 2 tablespoons of sattu stuffing inside, bring edges together, pinch closed, and roll into smooth spheres.',
            techniqueTip: 'Ensure dough is evenly thick so filling does not burst open during roasting.'
          },
          {
            stepNumber: 4,
            instruction: 'Roast eggplant and tomatoes directly over open stovetop flames or grill until skin is completely blackened and charred. Peel skin, mash flesh with chopped garlic, green chillies, raw mustard oil, and salt (Baingan-Tamatar Chokha).',
            timerSeconds: 600,
            timerLabel: 'Char Eggplant & Tomatoes'
          },
          {
            stepNumber: 5,
            instruction: 'Roast litti balls on a tawa, gas oven, or barbecue grill on medium-low flame for 18-20 minutes, turning frequently until all sides are blistered, firm, and golden brown.',
            timerSeconds: 1200,
            timerLabel: 'Roast Littis (20 Mins)'
          },
          {
            stepNumber: 6,
            instruction: 'Lightly crack hot littis, brush generously with desi ghee, and serve with smoky Baingan Chokha and pickled green chillies.',
            techniqueTip: 'Raw mustard oil in the chokha provides the authentic smoky Gangetic rustic bite.'
          }
        ],
        proTips: ['Direct flame roasting imparts the irreplaceable smoky camp flavor.'],
        servingSuggestions: ['Baingan-Tamatar Chokha', 'Spicy Green Chutney', 'Desi Ghee Dip'],
        whyThisDiffers: 'Features roasted chickpea sattu seasoned with mango pickle oil and charred eggplant chokha rather than spiced potato or lentil filling.'
      }
    ]
  },
  {
    id: 'indo-chinese-chilli-chicken',
    name: 'Kolkata Tangra Indo-Chinese (Hakka Chilli Chicken)',
    teluguName: 'కోల్‌కతా చిల్లీ చికెన్ (ఇండో-చైనీస్)',
    hindiName: 'कोलकाता टेंगरा मिर्च चिकन',
    tamilName: 'இந்தோ-சீன சில்லி சிக்கன்',
    category: 'Royal Curries',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'The legendary Phase 3 diaspora heritage of Kolkata’s Chinatown: wok-seared chicken tossed in dark soy, fiery green chillies, and garlic.',
    culturalPhilosophy: 'Phase 3 International Diaspora heritage: Created in Tangra and Tiretti Bazaar by Hakka Chinese immigrants who adapted wok techniques to the Indian palate using spicy green chillies, garlic, and dark brewed soy sauce.',
    variations: [
      {
        id: 'tangra-hakka-chilli-chicken',
        versionTitle: 'Kolkata Tangra Original Hakka Chilli Chicken',
        tagline: 'Crispy cornstarch-dusted chicken morsels tossed in high-heat wok with dark soy, pungent garlic, scallions, and sliced green chillies.',
        regionalLineage: {
          district: 'Tangra Chinatown, Kolkata',
          region: 'Diaspora',
          state: 'West Bengal / Chinese Diaspora',
          heritageContext: 'Born in the tanneries and eating houses of Tangra, where Hakka Chinese cooks blended traditional Cantonese and Hakka wok techniques with Bengal’s love for fresh green chillies.',
          traditionalVessel: 'Carbon Steel Wok over High Jet Flame'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 25,
          passiveTimeMin: 15,
          techniqueComplexity: 'Moderate',
          justification: 'Requires managing high-heat wok breath (Wok Hei), flash frying chicken to keep it crispy without drying interior juices, and balancing dark soy umami with pungent green chilli heat.'
        },
        servings: 4,
        prepTimeMin: 15,
        cookTimeMin: 15,
        spiceLevel: 4,
        nutritionFacts: {
          servingSize: '1 Serving with Peppers (approx. 210g)',
          calories: 310,
          proteinGrams: 28,
          carbsGrams: 12,
          fatGrams: 16,
          fiberGrams: 2,
          sodiumMg: 520,
          dietaryHighlights: ['High Protein', 'Wok-Tossed', 'Global Diaspora Heritage']
        },
        ingredients: [
          { id: 'cc-1', name: 'Boneless Chicken Thighs (Bite pieces)', amount: 500, unit: 'grams', category: 'protein' },
          { id: 'cc-2', name: 'Dark Soy Sauce', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'cc-3', name: 'Cornstarch (Cornflour)', amount: 3, unit: 'tbsp', category: 'grain' },
          { id: 'cc-4', name: 'Fresh Green Chillies (Slit lengthwise)', amount: 8, unit: 'pieces', category: 'spice' },
          { id: 'cc-5', name: 'Garlic Cloves (finely chopped)', amount: 2.5, unit: 'tbsp', category: 'aromatic' },
          { id: 'cc-6', name: 'Spring Onions / Scallions', amount: 1, unit: 'cup', category: 'vegetable' },
          { id: 'cc-7', name: 'White Vinegar & Black Pepper', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'cc-8', name: 'Neutral High Smoke Oil', amount: 3, unit: 'tbsp', category: 'oil' }
        ],
        substitutions: [
          {
            original: 'Boneless Chicken',
            substitute: 'Paneer Cubes, Extra Firm Tofu, or Cauliflower Florets',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Chilli Paneer and Gobi Manchurian are iconic vegetarian pillars of Tangra cuisine.',
            authenticityNote: 'Standard vegetarian adaptation in every Kolkata Chinese restaurant.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Marinate bite-sized chicken with 1 tbsp soy sauce, 1 egg white or 2 tbsp water, pinch of black pepper, and 3 tbsp cornstarch. Mix well to create a thin glossy coat.',
            timerSeconds: 600,
            timerLabel: 'Marinate Chicken'
          },
          {
            stepNumber: 2,
            instruction: 'Heat oil in a wok until shimmering. Flash-fry chicken pieces for 4-5 minutes until crisp and light golden. Drain on paper towels.',
            timerSeconds: 300,
            timerLabel: 'Flash Fry Chicken'
          },
          {
            stepNumber: 3,
            instruction: 'Heat 1.5 tbsp oil in the wok over highest flame until smoking. Add chopped garlic, ginger, and slit green chillies. Sizzle for 30 seconds to release fiery aroma.',
            timerSeconds: 30,
            timerLabel: 'Wok Flame Aromatics'
          },
          {
            stepNumber: 4,
            instruction: 'Toss in diced onions and bell peppers. Stir-fry vigorously on high heat for 1 minute so vegetables retain crunchy crispness.',
            techniqueTip: 'Keep flame on maximum; wok hei (breath of the wok) depends on rapid flash searing.'
          },
          {
            stepNumber: 5,
            instruction: 'Add dark soy sauce, white vinegar, green chilli sauce, pinch of sugar, and 3 tbsp water mixed with 1 tsp cornstarch. Bubble into a glossy dark glaze.',
            timerSeconds: 60,
            timerLabel: 'Form Glaze'
          },
          {
            stepNumber: 6,
            instruction: 'Tip the crispy fried chicken and chopped scallions into the boiling glaze. Toss vigorously for 45 seconds to coat every morsel. Serve smoking hot.',
            techniqueTip: 'Never simmer the chicken in the sauce, or the crispy cornstarch shell turns soggy.'
          }
        ],
        proTips: ['Boneless chicken thigh stays juicy under high wok heat; chicken breast dries out quickly.'],
        servingSuggestions: ['Hakka Egg / Veg Noodles', 'Vegetable Fried Rice', 'Manchow Soup'],
        whyThisDiffers: 'Features high-heat carbon steel wok tossing with dark soy, vinegar, and slit Indian green chillies rather than traditional slow curries.'
      }
    ]
  },
  {
    id: 'british-indian-curry',
    name: 'British-Indian Curry House (Chicken Tikka Masala & Balti)',
    teluguName: 'బ్రిటిష్-ఇండియన్ టిక్కా మసాలా & బాల్టీ',
    hindiName: 'ब्रिटिश-भारतीय चिकन टिक्का मसाला',
    tamilName: 'பிரிட்டிஷ் இந்தியன் சிக்கன் டிக்கா மசாலா',
    category: 'Royal Curries',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Phase 3 diaspora icon: the world’s most popular curry house creation born in Glasgow and Birmingham.',
    culturalPhilosophy: 'Phase 3 International Diaspora: In the 1970s, Sylheti Bangladeshi and Punjabi chefs across Britain revolutionized curry houses by adapting charcoal-tandoor smoked chicken tikka into a luxurious, spiced tomato-cream gravy for western palates.',
    variations: [
      {
        id: 'curry-house-tikka-masala',
        versionTitle: 'Glasgow 1970s Chicken Tikka Masala',
        tagline: 'Char-grilled smoky tandoori chicken chunks simmered in a velvety, spiced tomato, cream, and Kasuri methi sauce.',
        regionalLineage: {
          district: 'Glasgow & Brick Lane London',
          region: 'Diaspora',
          state: 'UK / British-Indian Diaspora',
          heritageContext: 'Created according to culinary lore at the Shish Mahal restaurant in Glasgow by Ali Ahmed Aslam, becoming Britain’s unofficial national dish.',
          traditionalVessel: 'Tandoor & Flat-Bottom Copper Kadai'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 60,
          techniqueComplexity: 'Moderate',
          justification: 'Two-stage preparation: marinating and broiling/grilling chicken at high dry heat for tandoor char, followed by emulsifying spiced tomato-cream sauce.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 2,
        nutritionFacts: {
          servingSize: '1 Bowl Tikka Masala (approx. 240g)',
          calories: 380,
          proteinGrams: 32,
          carbsGrams: 14,
          fatGrams: 22,
          fiberGrams: 3,
          sodiumMg: 460,
          dietaryHighlights: ['High Protein', 'Char-Grilled Smokiness', 'Rich Calcium']
        },
        ingredients: [
          { id: 'btm-1', name: 'Chicken Thighs or Breasts (cut into cubes)', amount: 650, unit: 'grams', category: 'protein' },
          { id: 'btm-2', name: 'Greek Yogurt & Lemon Juice', amount: 0.5, unit: 'cup', category: 'dairy' },
          { id: 'btm-3', name: 'Garam Masala & Kashmiri Chilli', amount: 2, unit: 'tbsp', category: 'spice' },
          { id: 'btm-4', name: 'Tomato Passata / Puree', amount: 2, unit: 'cups', category: 'vegetable' },
          { id: 'btm-5', name: 'Heavy Double Cream', amount: 0.5, unit: 'cup', category: 'dairy' },
          { id: 'btm-6', name: 'Butter or Ghee', amount: 3, unit: 'tbsp', category: 'dairy' },
          { id: 'btm-7', name: 'Kasuri Methi (Dried Fenugreek)', amount: 1, unit: 'tbsp', category: 'spice' },
          { id: 'btm-8', name: 'Finely Minced Garlic & Ginger', amount: 2, unit: 'tbsp', category: 'aromatic' }
        ],
        substitutions: [
          {
            original: 'Heavy Double Cream',
            substitute: 'Full-Fat Coconut Milk or Cashew Cream',
            category: 'dairy',
            ratio: '1:1',
            culinaryEffect: 'Equally luxurious silkiness for dairy-free global diners.',
            authenticityNote: 'Standard modification in modern London gastropubs.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Marinate chicken in yogurt, lemon juice, ginger-garlic paste, 1 tbsp Kashmiri chilli, and garam masala for at least 1 hour.',
            timerSeconds: 3600,
            timerLabel: 'Marinate Tikka'
          },
          {
            stepNumber: 2,
            instruction: 'Thread chicken onto skewers. Broil or grill on high heat (240°C / 475°F) for 10-12 minutes until charred at the edges and just cooked through.',
            timerSeconds: 660,
            timerLabel: 'Char Grill Tikka (11 Mins)'
          },
          {
            stepNumber: 3,
            instruction: 'In a large pan, melt butter. Sauté minced garlic, ginger, and remaining spices for 1 minute until fragrant.',
            timerSeconds: 60,
            timerLabel: 'Sauté Aromatics'
          },
          {
            stepNumber: 4,
            instruction: 'Pour in tomato passata and 0.5 cup water. Simmer on medium heat for 12 minutes until sauce darkens and reduces.',
            timerSeconds: 720,
            timerLabel: 'Simmer Tomato Sauce'
          },
          {
            stepNumber: 5,
            instruction: 'Slide the charred chicken tikka pieces into the simmering sauce. Stir in the heavy cream and crushed Kasuri methi. Simmer gently for 4 minutes.',
            timerSeconds: 240,
            timerLabel: 'Enrich with Cream'
          },
          {
            stepNumber: 6,
            instruction: 'Finish with a sprinkle of fresh coriander and serve hot with garlic naan.',
            techniqueTip: 'Charring the chicken prior to adding to gravy is non-negotiable; that char smoke gives BIR curries their soul.'
          }
        ],
        proTips: ['Broiling with high heat mimics the clay tandoor oven.'],
        servingSuggestions: ['Garlic Butter Naan', 'Pilau Rice', 'Poppadoms with Mango Chutney'],
        whyThisDiffers: 'Features char-grilled skewered tikka simmered in a creamy, sweet-tart tomato sauce designed for global diaspora palates.'
      }
    ]
  },
  {
    id: 'durban-bunny-chow',
    name: 'South African Durban Bunny Chow (Mutton & Bean)',
    teluguName: 'డర్బన్ బన్నీ చౌ (దక్షిణాఫ్రికా)',
    hindiName: 'डरबन बन्नी चाउ',
    tamilName: 'டர்பன் பன்னி சௌ',
    category: 'Street Food & Snacks',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Phase 3 South African Indian indenture heritage: a hollowed loaf of white bread overflowing with fiery Durban curry.',
    culturalPhilosophy: 'Phase 3 Indenture Diaspora: Created by Indian migrant laborers and golf caddies in Durban during apartheid when laws barred them from entering restaurants. A hollowed loaf of unsliced bread served as an edible lunchbox and bowl.',
    variations: [
      {
        id: 'bunny-durban-mutton',
        versionTitle: 'Durban Quarter Mutton Bunny Chow',
        tagline: 'Fiery, aromatic Durban lamb curry ladled into a hollowed quarter loaf of fresh white bread, topped with the bread "virgin" and carrot sambal.',
        regionalLineage: {
          district: 'Durban, KwaZulu-Natal',
          region: 'Diaspora',
          state: 'South Africa / Indian Indenture Diaspora',
          heritageContext: 'Created in the 1940s in Durban’s Grey Street Indian quarter, becoming South Africa’s most famous street food.',
          traditionalVessel: 'Heavy Cast Iron Pot & Unsliced Fresh White Loaf'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 30,
          passiveTimeMin: 40,
          techniqueComplexity: 'Moderate',
          justification: 'Requires slow-cooking mutton with whole Durban spice blend (star anise, curry leaves, ginger) until falling apart tender, and carefully carving out bread without puncturing bottom crust.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 45,
        spiceLevel: 5,
        nutritionFacts: {
          servingSize: '1 Quarter Bunny (approx. 320g)',
          calories: 520,
          proteinGrams: 28,
          carbsGrams: 64,
          fatGrams: 18,
          fiberGrams: 5,
          sodiumMg: 510,
          dietaryHighlights: ['Complete Street Meal', 'High Protein Lamb', 'Historic Diaspora Heritage']
        },
        ingredients: [
          { id: 'dbc-1', name: 'Bone-in Mutton or Lamb (Curry cut)', amount: 700, unit: 'grams', category: 'protein' },
          { id: 'dbc-2', name: 'Unsliced Fresh White Bread (Govender loaf)', amount: 1, unit: 'pieces', category: 'grain' },
          { id: 'dbc-3', name: 'Durban Curry Powder / Red Masala', amount: 2.5, unit: 'tbsp', category: 'spice' },
          { id: 'dbc-4', name: 'Potatoes (peeled and quartered)', amount: 3, unit: 'pieces', category: 'vegetable', notes: 'Durban curries always feature soft potatoes' },
          { id: 'dbc-5', name: 'Star Anise, Cinnamon, Cardamom', amount: 4, unit: 'pieces', category: 'spice' },
          { id: 'dbc-6', name: 'Fresh Curry Leaves & Chopped Onions', amount: 2, unit: 'sprigs', category: 'aromatic' },
          { id: 'dbc-7', name: 'Finely Chopped Tomatoes', amount: 2, unit: 'pieces', category: 'vegetable' },
          { id: 'dbc-8', name: 'Grated Carrot, Chilli, Vinegar (for Sambal)', amount: 1, unit: 'cup', category: 'vegetable' }
        ],
        substitutions: [
          {
            original: 'Mutton',
            substitute: 'Sugar Beans (Red Speckled Beans) and Potatoes',
            category: 'protein',
            ratio: '1:1',
            culinaryEffect: 'Sugar Bean Bunny is the most revered historic vegetarian version in South Africa.',
            authenticityNote: 'The original bunny chow served to indentured sugar cane workers was bean-based.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Heat oil in a heavy pot. Add star anise, cinnamon stick, fennel seeds, chopped onions, and curry leaves. Sauté until dark caramel brown.',
            timerSeconds: 360,
            timerLabel: 'Caramelize Onions'
          },
          {
            stepNumber: 2,
            instruction: 'Add ginger-garlic paste and Durban red curry powder. Sizzle for 40 seconds on low heat until oil separates.',
            timerSeconds: 40,
            timerLabel: 'Bloom Durban Masala'
          },
          {
            stepNumber: 3,
            instruction: 'Add bone-in mutton pieces and chopped tomatoes. Sear on high heat for 6 minutes to seal meat juices.',
            timerSeconds: 360,
            timerLabel: 'Sear Meat'
          },
          {
            stepNumber: 4,
            instruction: 'Add 1.5 cups water and salt. Simmer covered on low heat for 30 minutes. Add potato quarters and cook 15 more minutes until potatoes are meltingly soft and meat is tender.',
            timerSeconds: 2700,
            timerLabel: 'Slow Cook Durban Curry'
          },
          {
            stepNumber: 5,
            instruction: 'Cut a fresh unsliced white loaf into quarters. Hollow out the soft crumb from the center, keeping bottom and walls intact. Keep the scooped bread piece (the "virgin").',
            techniqueTip: 'Do not scoop too thin, or the curry gravy will soak through the bread before serving.'
          },
          {
            stepNumber: 6,
            instruction: 'Ladle the piping hot mutton and soft gravy-soaked potato deep into the bread cavity, letting rich red gravy spill over the edges. Crown with the bread "virgin" and serve with carrot sambal.',
            techniqueTip: 'Eat with hands by tearing off pieces of the bread wall and dipping into the rich meat gravy.'
          }
        ],
        proTips: ['Durban curries are famously fiery; adjust chilli to taste but retain star anise for signature aroma.'],
        servingSuggestions: ['Carrot & Chilli Sambal', 'Fresh Coriander', 'Extra Curry Gravy'],
        whyThisDiffers: 'Served directly inside a hollowed loaf of white bread with melting potatoes and fiery star-anise-scented Durban curry.'
      }
    ]
  },
  {
    id: 'trinidad-doubles-roti',
    name: 'Caribbean Indo-Trinidadian (Trinidad Doubles & Roti)',
    teluguName: 'ట్రినిడాడ్ డబుల్స్ & రోటీ (కరేబియన్)',
    hindiName: 'त्रिनिदाद डबल्स और रोटी',
    tamilName: 'டிரினிடாட் டபுள்ஸ்',
    category: 'Street Food & Snacks',
    heroImage: '/src/assets/images/hero_culinary_spread_1793770951915.jpg',
    shortDescription: 'Phase 3 Caribbean diaspora mastery: turmeric-infused fried bara flatbreads sandwiching curried channa and culantro chutney.',
    culturalPhilosophy: 'Phase 3 West Indies Diaspora: In 1845, the ship Fatel Razack brought indentured laborers from Bihar and Uttar Pradesh to Trinidad. Their food evolved into legendary Caribbean street culture: doubles, dhalpuri rotis, and shado beni (culantro) chutneys.',
    variations: [
      {
        id: 'doubles-trinidad-channa',
        versionTitle: 'Trinidad Street Doubles with Curried Channa & Kuchela',
        tagline: 'Two warm, cloud-soft fried turmeric baras layered with spiced curried chickpeas, green mango kuchela, and cucumber-culantro chutney.',
        regionalLineage: {
          district: 'Port of Spain & Princes Town',
          region: 'Diaspora',
          state: 'Trinidad & Tobago / Indo-Caribbean Diaspora',
          heritageContext: 'Created in 1936 by Emamool Deen in Princes Town, Trinidad, when customers insisted on having two baras (a "double") with their curried channa.',
          traditionalVessel: 'Heavy Cast Iron Skillet (Tawa) & Deep Fryer'
        },
        difficulty: {
          level: 'Medium',
          stepsCount: 6,
          activeTimeMin: 35,
          passiveTimeMin: 60,
          techniqueComplexity: 'Moderate',
          justification: 'Yeast-fermenting and rolling sticky turmeric dough flat between oiled palms, quick flash frying baras so they remain soft rather than crisp, and slow simmering curried channa with Caribbean culantro.'
        },
        servings: 4,
        prepTimeMin: 20,
        cookTimeMin: 25,
        spiceLevel: 3,
        nutritionFacts: {
          servingSize: '1 Double (2 Baras with Channa, approx. 210g)',
          calories: 320,
          proteinGrams: 11,
          carbsGrams: 52,
          fatGrams: 8,
          fiberGrams: 6,
          sodiumMg: 420,
          dietaryHighlights: ['Vegan Street Superfood', 'Complex Carbs', 'Plant Protein', 'West Indies Heritage']
        },
        ingredients: [
          { id: 'td-1', name: 'All-Purpose Flour', amount: 2, unit: 'cups', category: 'grain' },
          { id: 'td-2', name: 'Instant Yeast & Ground Turmeric', amount: 1, unit: 'tsp', category: 'spice' },
          { id: 'td-3', name: 'Chickpeas (Channa - soaked & cooked)', amount: 2, unit: 'cups', category: 'lentil' },
          { id: 'td-4', name: 'Caribbean Green Seasoning or Culantro (Shado Beni)', amount: 2, unit: 'tbsp', category: 'aromatic' },
          { id: 'td-5', name: 'Trinidad Curry Powder & Roasted Geera (Cumin)', amount: 1.5, unit: 'tbsp', category: 'spice' },
          { id: 'td-6', name: 'Scotch Bonnet Chilli (minced)', amount: 0.5, unit: 'pieces', category: 'spice' },
          { id: 'td-7', name: 'Grated Green Mango Pickle (Kuchela) & Tamarind Sauce', amount: 2, unit: 'tbsp', category: 'spice' }
        ],
        substitutions: [
          {
            original: 'Culantro / Shado Beni',
            substitute: 'Fresh Coriander (Cilantro) mixed with 1 small garlic clove',
            category: 'aromatic',
            ratio: '1:1',
            culinaryEffect: 'Recreates pungent herbal freshness.',
            authenticityNote: 'Standard worldwide substitute for Trinidadian expats.'
          }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Mix flour, yeast, turmeric, ground cumin, and warm water into a soft, slightly sticky dough. Let ferment for 1 hour until puffy.',
            timerSeconds: 3600,
            timerLabel: 'Ferment Bara Dough'
          },
          {
            stepNumber: 2,
            instruction: 'Prepare Curried Channa: Heat 2 tbsp oil in a pot, add Trinidad curry powder mixed with 3 tbsp water to form a paste. Cook for 2 minutes until fragrant.',
            timerSeconds: 120,
            timerLabel: 'Cook Curry Paste'
          },
          {
            stepNumber: 3,
            instruction: 'Add boiled chickpeas, garlic, shado beni/culantro, scotch bonnet, and 1.5 cups water. Simmer on medium for 15 minutes. Mash 1/3 of the chickpeas to create thick gravy.',
            timerSeconds: 900,
            timerLabel: 'Simmer Channa (15 Mins)'
          },
          {
            stepNumber: 4,
            instruction: 'Oil palms, pinch golf-ball sized pieces of rested bara dough, and stretch thinly into flat rounds.',
            techniqueTip: 'Work with well-oiled hands; do not use dry flour, which burns in the frying oil.'
          },
          {
            stepNumber: 5,
            instruction: 'Slide baras into hot oil (190°C / 375°F). Fry for just 15-20 seconds per side until puffed and golden. Do not overcook or baras become crisp like papad.',
            timerSeconds: 30,
            timerLabel: 'Flash Fry Bara'
          },
          {
            stepNumber: 6,
            instruction: 'Assemble doubles: Overlap two warm baras on greaseproof paper, ladle generous curried channa over the center, and drizzle with tamarind sauce and grated cucumber-kuchela.',
            techniqueTip: 'Eat while hot by rolling the paper and biting into both soft baras and curried channa together.'
          }
        ],
        proTips: ['A pinch of roasted ground cumin (Geera) on top just before wrapping elevates the aroma.'],
        servingSuggestions: ['Tamarind Sweet Chutney', 'Shado Beni Pepper Sauce', 'Green Mango Kuchela'],
        whyThisDiffers: 'Features turmeric-yeast puffed baras served as a portable street parcel with Caribbean culantro-channa and mango kuchela.'
      }
    ]
  }
];

