export class ProjectParentingLogic {
    inheritMetadata(childTask: any, parentProject: any) {
        // Hierarchical inheritance for tags and priority
        return { ...childTask, tags: [...childTask.tags, ...parentProject.tags] };
    }
}
