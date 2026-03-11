<script setup lang="ts">

// self
import { ROUTES_PATHS } from '@/constants'

</script>

<template>
    <footer class="footer">
        <div class="flex:col-max">

            <div class="footer__inner">

                <div class="footer__content">

                    <div class="footer__item">

                        <router-link
                            class="footer__logo"
                            :to="ROUTES_PATHS.HOME.path"
                        >
                            <img
                                src="/images/logo/logo-dark.avif"
                                alt="logo"
                            >
                        </router-link>

                        <div class="text-tmp txt-14 txt-accent-3">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat commodi doloremque, nesciunt molestiae esse non dicta totam nam fugit unde error adipisci facere quia soluta et in excepturi quidem, aliquid qui eius. Laborum quas quibusdam doloribus, quod autem aut omnis provident
                                exercitationem eaque earum sit vitae voluptate eligendi beatae magni?</p>
                        </div>

                    </div>

                    <nav class="footer__nav">

                        <div class="footer__nav-list">
                            <div class="text-tmp title-18">
                                <h3>LORENZ</h3>
                            </div>

                            <ul>
                                <li>
                                    <router-link to="#">
                                        Trova il tuo negozio
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Il marchio Lorenz
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Podcast
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Catalogo orologi
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Catalogo penne
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Manuali
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="footer__nav-list">
                            <div class="text-tmp title-18">
                                <h3>SERVIZIO CLIENTI</h3>
                            </div>

                            <ul>
                                <li>
                                    <router-link to="#">
                                        FAQ
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Assistenza ordini
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Assistenza prodotti
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Richiesta modelli storici
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Diventa rivenditore
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Collaborazioni
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="footer__nav-list">
                            <div class="text-tmp title-18">
                                <h3>IL TUO ACCOUNT</h3>
                            </div>

                            <ul>
                                <li>
                                    <router-link to="#">
                                        Accedi o registrati
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Termini e condizioni
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#">
                                        Privacy Policy
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                    </nav>

                </div>

                <div class="footer__copy">

                    <div class="grid:fr-1 g-gap-10">
                        <div class="text-tmp txt-12 txt-accent-3">
                            <p>© 2026, Lorenz Watches - Orologi dal 1934. Powered by Shopify</p>
                            <p>Leader Watch Company S.r.l - P.IVA IT09197520969 - REA MI2075265 - Via Pietro Mascagni 15 - 20122 Milano</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </footer>
</template>

<style scoped lang="scss">
@forward "./index.scss";
</style>