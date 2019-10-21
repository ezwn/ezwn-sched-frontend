import React from 'react';
  
const naMsg = "No value"; 

const SingleLineTextIO = ({ value, onChange, editable }) => editable
      ? (<input type='text' value={value || ""} onChange={e => onChange(e.target.value)} className='input' />)
      : value || naMsg;

const SelectIO = ({ value, onChange, editable, choiceList }) => editable
      ? (<select value={value} onChange={e => onChange(e.target.value)} className='input'>
      { choiceList.map(choice => <option value={choice.key} key={choice.key}>{choice.key}</option>) }
      </select>)
      : value || naMsg;
      
const NumberIO = ({ value, onChange, editable }) => editable
      ? (<input type='number' value={value || 0} onChange={e => onChange(e.target.value)} className='input' />)
      : value || naMsg;

const MultipleLineTextIO = ({ value, onChange, editable }) => editable
  ? (<textarea type='number' value={value || ""} onChange={e => onChange(e.target.value)} className='input' />)
  : value || naMsg;

const BooleanIO = ({ value, onChange, editable }) => editable
    ? (<input type='checkbox' checked={!!value} onChange={e => onChange(e.target.checked)} />)
    : value || naMsg;

const DateTimeIO = ({ value, onChange, editable }) => editable
    ? (<input type='date' value={value} onChange={e => onChange(e.target.value)} className='input' />)
    : value || naMsg;

/**
 * TaskDetailsCmp : displays the properties of an instance
 * of "Task".
 */
export class TaskDetailsCmp extends React.Component {

  static defaultFields = [
      { name: 'tasId', editable: false },
      { name: 'title', editable: true },
      { name: 'description', editable: true },
      { name: 'blocked', editable: true },
      { name: 'status', editable: true }
    ];

  static defaultProps = {
    fields: TaskDetailsCmp.defaultFields
  };

  constructor(props) {
    super(props);

    this.fieldRenderers = {
      tasId: this.renderTasId,
      title: this.renderTitle,
      description: this.renderDescription,
      blocked: this.renderBlocked,
      status: this.renderStatus
    };
  }

  render() {
    const { onChange, value, fields, className } = this.props; 

    return (
      <div className={'fieldset Task' + (className ? ' ' + className : '')}>{
        fields.map(field => this.fieldRenderers[field.name](
          value[field.name],
          field.editable ? !!onChange : false
        ))
      }</div>
    );
  }

  renderTasId = (value, editable) => (<div className='field tasId' key='tasId'>
    <div className='label'>id</div>
    <div className='value'><NumberIO value={value} onChange={this.onTasIdChange} editable={editable} /></div>
  </div>)

  onTasIdChange = (value) =>
    this.props.onChange({ tasId: parseInt(value) });

  renderTitle = (value, editable) => (<div className='field title' key='title'>
    <div className='label'>title</div>
    <div className='value'><SingleLineTextIO value={value} onChange={this.onTitleChange} editable={editable} /></div>
  </div>)

  onTitleChange = (value) =>
    this.props.onChange({ title: value });

  renderDescription = (value, editable) => (<div className='field description' key='description'>
    <div className='label'>description</div>
    <div className='value'><MultipleLineTextIO value={value} onChange={this.onDescriptionChange} editable={editable} /></div>
  </div>)

  onDescriptionChange = (value) =>
    this.props.onChange({ description: value });

  renderBlocked = (value, editable) => (<div className='field blocked' key='blocked'>
    <div className='label'>blocked</div>
    <div className='value'><BooleanIO value={value} onChange={this.onBlockedChange} editable={editable} /></div>
  </div>)

  onBlockedChange = (value) =>
    this.props.onChange({ blocked: value });

  renderStatus = (value, editable) => (<div className='field status' key='status'>
    <div className='label'>status</div>
    <div className='value'><SelectIO value={value} onChange={this.onStatusChange} editable={editable} choiceList={[{"key":"IDEA"},{"key":"TODO"},{"key":"IN_PROGRESS"},{"key":"DONE"}]} /></div>
  </div>)

  onStatusChange = (value) =>
    this.props.onChange({ status: value });
}


/**
 * ActionDetailsCmp : displays the properties of an instance
 * of "Action".
 */
export class ActionDetailsCmp extends React.Component {

  static defaultFields = [
      { name: 'actId', editable: false },
      { name: 'moment', editable: true },
      { name: 'summary', editable: true },
      { name: 'details', editable: true }
    ];

  static defaultProps = {
    fields: ActionDetailsCmp.defaultFields
  };

  constructor(props) {
    super(props);

    this.fieldRenderers = {
      actId: this.renderActId,
      moment: this.renderMoment,
      summary: this.renderSummary,
      details: this.renderDetails
    };
  }

  render() {
    const { onChange, value, fields, className } = this.props; 

    return (
      <div className={'fieldset Action' + (className ? ' ' + className : '')}>{
        fields.map(field => this.fieldRenderers[field.name](
          value[field.name],
          field.editable ? !!onChange : false
        ))
      }</div>
    );
  }

  renderActId = (value, editable) => (<div className='field actId' key='actId'>
    <div className='label'>id</div>
    <div className='value'><NumberIO value={value} onChange={this.onActIdChange} editable={editable} /></div>
  </div>)

  onActIdChange = (value) =>
    this.props.onChange({ actId: parseInt(value) });

  renderMoment = (value, editable) => (<div className='field moment' key='moment'>
    <div className='label'>moment</div>
    <div className='value'><DateTimeIO value={value} onChange={this.onMomentChange} editable={editable} /></div>
  </div>)

  onMomentChange = (value) =>
    this.props.onChange({ moment: value });

  renderSummary = (value, editable) => (<div className='field summary' key='summary'>
    <div className='label'>summary</div>
    <div className='value'><SingleLineTextIO value={value} onChange={this.onSummaryChange} editable={editable} /></div>
  </div>)

  onSummaryChange = (value) =>
    this.props.onChange({ summary: value });

  renderDetails = (value, editable) => (<div className='field details' key='details'>
    <div className='label'>details</div>
    <div className='value'><MultipleLineTextIO value={value} onChange={this.onDetailsChange} editable={editable} /></div>
  </div>)

  onDetailsChange = (value) =>
    this.props.onChange({ details: value });
}