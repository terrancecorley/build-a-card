export const FORM_TEXT_CHANGES = 'FORM_TEXT_CHANGES';
export const formTextChanges = (target) => ({
  type: FORM_TEXT_CHANGES,
  [target.name]: target.value
});

export const FORM_IMG_CHANGES = 'FORM_IMG_CHANGES';
export const formImgChanges = (target, reader) => ({
  type: FORM_IMG_CHANGES,
  [target.name]: reader.value
});