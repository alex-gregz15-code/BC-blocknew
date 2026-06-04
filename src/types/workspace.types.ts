/**
 * types/workspace.types.ts
 * Types for the Workspace component.
 */

export interface WorkspaceTab {
  id: string;
  label: string;
  icon?: string;
}

export interface WorkspaceProps {
  tabs?: WorkspaceTab[];
  defaultTab?: string;
}