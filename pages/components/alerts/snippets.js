export const basicAlert = `
    <tw-alert>
        A basic alert.
    </tw-alert>
`;

export const alertWithIcon = `
    <tw-alert>
        <template #icon>
            <i class="fas fa-lg fa-pencil"/>
        </template>
        An alert with an icon.
    </tw-alert>
`;

export const dismissableAlert = `
    <tw-alert :dismissable="true" @dismissed="dismissedHandler">
        A dismissable alert.
    </tw-alert>
`;

export const durationAlert = `
    <tw-alert :duration="duration">
        An alert that disappears after a certain duration.
    </tw-alert>
`;

export const defaultAlert = `
    <tw-alert>
        A default alert.
    </tw-alert>
`;

export const infoAlert = `
    <tw-alert type="info">
        An info alert.
    </tw-alert>
`;

export const warningAlert = `
    <tw-alert type="warning">
        A warning alert.
    </tw-alert>
`;

export const dangerAlert = `
    <tw-alert type="danger">
        A danger alert.
    </tw-alert>
`;

export const successAlert = `
    <tw-alert type="success">
        A success alert.
    </tw-alert>
`;
