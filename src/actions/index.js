export const FORM_TEXT_CHANGES = 'FORM_TEXT_CHANGES';
export const formTextChanges = (target) => ({
  type: FORM_TEXT_CHANGES,
  name: target.name,
  value: target.value,
});

export const FORM_IMG_CHANGES = 'FORM_IMG_CHANGES';
export const formImgChanges = (target, result) => ({
  type: FORM_IMG_CHANGES,
  name: target.name,
  value: result,
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
  type: RESET_STATE,
});