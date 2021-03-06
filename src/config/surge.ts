import { Render, RenderState } from '@/types/config';

export class SurgeConfig implements Render {
    render(state: RenderState): string {
        return `[Rule]\n${state.rules.join('\n')}`
    }
}
