import React, { ChangeEvent } from 'react';
import { set } from 'lodash';
import { Select } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { ScrapColumn, SCRAP_QUERY_RESULT_COLUMN_FORMATS, InfinityQuery } from '../../shared/types';

interface ScrapperColumnsProps {
  query: InfinityQuery;
  onChange: (value: any) => void;
}

export const ScrapperColumns: React.FC<ScrapperColumnsProps> = ({ query, onChange }: ScrapperColumnsProps) => {
  const defaultScrapResultFormat = { value: 'string', label: 'String' };

  const onColumnAdd = () => {
    const columns = query.columns || [];
    columns.push({
      text: '',
      selector: '',
      type: 'string',
    });
    onChange({ ...query, columns });
  };
  const onColumnRemove = (index: number) => {
    const columns = query.columns;
    columns.splice(index, 1);
    onChange({ ...query, columns });
  };
  const onInputTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const value = event.target.value;
    set(query, field, value);
    onChange(query);
  };
  const onSelectChange = (selectableItem: SelectableValue, field: string) => {
    set(query, field, selectableItem.value);
    onChange(query);
  };

  return (
    <>
      {query.columns.length === 0 ? (
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label query-keyword width-8" title="Columns">
                Columns
              </label>
            </div>
          </div>
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <span className="btn btn-success btn-small" style={{ marginTop: '5px' }} onClick={() => onColumnAdd()}>
                Add Columns
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {query.columns.map((column: ScrapColumn, index: number) => {
        return (
          <div className="gf-form-inline">
            <div className="gf-form">
              <label className="gf-form-label query-keyword width-8" title="Column">
                Column {index + 1}
              </label>
              <input
                type="text"
                className="gf-form-input min-width-8"
                value={column.text}
                placeholder="Title"
                onChange={e => onInputTextChange(e, `columns[${index}].text`)}
              ></input>
              <input
                type="text"
                className="gf-form-input min-width-8"
                value={column.selector}
                placeholder={query.type === 'csv' ? 'Column Name' : 'Selector'}
                onChange={e => onInputTextChange(e, `columns[${index}].selector`)}
              ></input>
              <Select
                className="min-width-12 width-12"
                value={
                  SCRAP_QUERY_RESULT_COLUMN_FORMATS.find((field: any) => field.value === column.type) ||
                  defaultScrapResultFormat
                }
                options={SCRAP_QUERY_RESULT_COLUMN_FORMATS}
                defaultValue={defaultScrapResultFormat}
                onChange={e => onSelectChange(e, `columns[${index}].type`)}
              ></Select>
              <span
                className="btn btn-success btn-small"
                style={{ margin: '5px' }}
                onClick={() => {
                  onColumnAdd();
                }}
              >
                +
              </span>
              <span
                className="btn btn-danger btn-small"
                style={{ margin: '5px' }}
                onClick={() => {
                  onColumnRemove(index);
                }}
              >
                x
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
