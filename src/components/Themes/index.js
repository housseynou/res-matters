import React from 'react'
import { themeSection, descP, themeContainers, energySection, mineSection } from './ThemeElements';

function Themes() {
    return (
        <themeSection>
            <descP>Resource Matters est un organisme non gouvernemental qui a pour but de:
                - Lutter pour la bonne gestion des ressources miniers et la transparence des redevances payées par les entreprises exploitrices aux collectivités locales.
                - Oeuvrer pour l'électrification à faible coût et la plus adaptée dans toute la RDC d'ici 2030, et mettre à la disposition de la population congolaise, un outil
                  de modélisation et de scénarisation pour l'électrification d'une zone donnée.
            </descP>
            <themeContainers>
                <energySection></energySection>
                <mineSection></mineSection>
            </themeContainers>
        </themeSection>
    )
}

export default Themes;