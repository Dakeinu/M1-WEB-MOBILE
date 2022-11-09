import { precacheAndRoute } from "workbox-precaching";
import {registerRoute} from 'workbox-routing';
import {NetworkOnly} from 'workbox-strategies';
import {offlineFallback} from 'workbox-recipes';


declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(() => true, new NetworkOnly());
offlineFallback({pageFallback: '/offline.html'});

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

declare global {
    interface WindowEventMap {
        'beforeinstallprompt': BeforeInstallPromptEvent;
    }
}
