import React, { useCallback } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash-es';

import style from './desc.module.scss';

export type DescProps = {
  text: string;
  /** when is true will be remove dom */
  close?: boolean;
  /** when is true that is hidden text, no remove dom */
  hideText?: boolean;
  /** link to url of this desc */
  link?: string;
  showDelete?: boolean;
  customClassName?: string;

  // event
  onDelete?: (props: DescProps) => boolean;
};

export function Desc(props: DescProps) {
  const {
    text,
    close,
    hideText,
    link,
    showDelete,
    customClassName = '',

    onDelete,
  } = props;

  const _onDelete = useCallback(() => onDelete(props), [onDelete]);

  const _onClickText = useCallback(() => link && window.open(link), [link]);

  return !close ? (
    <>
      <div className={classnames(style.desc, customClassName, link ? style.pointer : '')} onClick={_onClickText}>
        {hideText ? null : text}
      </div>
      {showDelete ? (
        <span className={classnames(style['desc-delete'], style.pointer)} onClick={_onDelete}>
          X
        </span>
      ) : null}
    </>
  ) : null;
}
