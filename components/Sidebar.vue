<template>
    <div class="sticky top-24">
        <ul>
            <li>
                <i class="fa fa-home" />
                <nuxt-link class=""
                           to="/">
                    Home
                </nuxt-link>
            </li>
            <li class="uppercase text-sm text-gray-600 tracking-wide mt-4">
                Getting Started
            </li>
            <li>
                <nuxt-link class="block"
                           to="/getting-started/installation">Installation
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/getting-started/requirements">Requirements
                </nuxt-link>
            </li>
            <li class="uppercase text-sm text-gray-600 tracking-wide mt-4">
                Components
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/alerts">Alerts
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/badges">Badges
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/headings">Headings
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/panels">Panels
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/tables">Tables
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="block"
                           to="/components/tabs">Tabs
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
    };
</script>
