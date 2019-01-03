export type MainMenuStateProps = {
  canUndo: boolean;
  canRedo: boolean;
};

export type MainMenuDispatchProps = {
  undo:() => void;
  redo:() => void;
};

export type MainMenuProps = MainMenuStateProps & MainMenuDispatchProps;