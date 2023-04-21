import { applyTemplate } from "./utils.ts";

// define any template ID(s) to be passed to the generic Apply Template function later on
const ENTITY_TYPE = "${{entityTypeId}}"
// define any template ID(s) to be passed to the generic Apply Template function later on
const template1 = "${{templateId}}";
// const template2 = "";
// const template3 = "";
// const template4 = "";


export async function applyEntityTemplates(payload: any) {
    // as an example, checking for only new location entities
    if (payload.meta.eventType === "ENTITY_CREATED" && payload.primaryProfile.meta.entityType === ENTITY_TYPE) {
        await applyTemplate(template1, payload.entityId);
        // logic flow for applying different sets of templates based on the value of a specific field
        // if (payload.primaryProfile.c_customField === "value1") {
        //     await applyTemplate(template1, payload.entityId);
        //     await applyTemplate(template2, payload.entityId);
        //     return;
        // } else if (payload.primaryProfile.c_customField === "value2") {
        //     await applyTemplate(template3, payload.entityId);
        //     await applyTemplate(template4, payload.entityId);
            // return;
        // }
    }
    // simply return if the initial check did not pass and no templates were applied
    return;
}