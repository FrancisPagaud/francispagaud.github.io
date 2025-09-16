---
layout: page
title: Emissive cathode immersed in a plasma
description: Poster presented at EPS Plasma 2023. 
img: assets/img/_DSC3099_crop.png
importance: 1
category: Posters
related_publications: true
---

This project was an unexpected journey, from its conceptualization to its end! In our quest to control plasma properties using a hot cathode, the behavior of this new tool turned out to be strange. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/_DSC3099_comp.jpg" title="cathode" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <i>An eye for an eye!</i> The tungsten filament already glows at 1000 K, but needs to reach 2500 K to emit electrons.
</div>

The current extracted could be unsteady, with a puzzling runaway behaviour leading to extreme current injection in the plasma. While this topic was a minor issue, I decided to investigate the temperature profile along the filament through the heat budget equation with the support of my PhD supervisor Nicolas Plihon. Pyrometry experiments were then later suggested by Nicolas Claire in a plasma workshop at Marseille. And the results were unexpected! 
Temperature profile exhibits strong heterogeneities, which wasn't predicted at all by my simple thermal model. And the main reason is: electrons prgoressively leave the metal to enter the plasma, leading to a decreasing current in the filament along its length. We studied in depth this cathode-plasma dynamic system to understand it completely and characterize the different operation regimes. 
It resulted in this poster presented at EPS Plasma 2023 (Bordeaux, Lyon), accompanied with an oral presentation and a publication in <i>Plasma Sources Science and Technology</i> {% cite PSST_2023 %}.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/pdf/poster_EPS_2023.pdf" title="Poster" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


{% endraw %}
