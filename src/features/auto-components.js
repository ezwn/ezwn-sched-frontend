import React from 'react';
  
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

  constructor(props) {
    super(props);

    this.fieldRenderers = {
      tasId: this.renderTasId,
      title: this.renderTitle,
      description: this.renderDescription,
      blocked: this.renderBlocked,
      status: this.renderStatus
    };

    this.fields = props.fields || TaskDetailsCmp.defaultFields;

  }

  render() {
    const { onChange, value } = this.props; 

    return (
      <div className='fieldset Task'>{
        this.fields.map(field => this.fieldRenderers[field.name](
          value[field.name],
          field.editable ? !!onChange : false
        ))
      }</div>
    );
  }

  renderTasId = (value, editable) => (<div className='field tasId' key='tasId'>
    <div className='label'>id</div>
    { editable
      ? (<div className='value'><input type='number' value={ value } onChange={this.onTasIdChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onTasIdChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ tasId: parseInt(value) });
  }

  renderTitle = (value, editable) => (<div className='field title' key='title'>
    <div className='label'>title</div>
    { editable
      ? (<div className='value'><input type='text' value={ value } onChange={this.onTitleChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onTitleChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ title: value });
  }

  renderDescription = (value, editable) => (<div className='field description' key='description'>
    <div className='label'>description</div>
    { editable
      ? (<div className='value'><textarea type='text' value={ value } onChange={this.onDescriptionChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onDescriptionChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ description: value });
  }

  renderBlocked = (value, editable) => (<div className='field blocked' key='blocked'>
    <div className='label'>blocked</div>
    { editable
      ? (<div className='value'><input type='text' value={ value } onChange={this.onBlockedChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onBlockedChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ blocked: value });
  }

  renderStatus = (value, editable) => (<div className='field status' key='status'>
    <div className='label'>status</div>
    { editable
      ? (<div className='value'><input type='text' value={ value } onChange={this.onStatusChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onStatusChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ status: value });
  }
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

  constructor(props) {
    super(props);

    this.fieldRenderers = {
      actId: this.renderActId,
      moment: this.renderMoment,
      summary: this.renderSummary,
      details: this.renderDetails
    };

    this.fields = props.fields || ActionDetailsCmp.defaultFields;

  }

  render() {
    const { onChange, value } = this.props; 

    return (
      <div className='fieldset Action'>{
        this.fields.map(field => this.fieldRenderers[field.name](
          value[field.name],
          field.editable ? !!onChange : false
        ))
      }</div>
    );
  }

  renderActId = (value, editable) => (<div className='field actId' key='actId'>
    <div className='label'>id</div>
    { editable
      ? (<div className='value'><input type='number' value={ value } onChange={this.onActIdChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onActIdChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ actId: parseInt(value) });
  }

  renderMoment = (value, editable) => (<div className='field moment' key='moment'>
    <div className='label'>moment</div>
    { editable
      ? (<div className='value'><input type='text' value={ value } onChange={this.onMomentChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onMomentChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ moment: value });
  }

  renderSummary = (value, editable) => (<div className='field summary' key='summary'>
    <div className='label'>summary</div>
    { editable
      ? (<div className='value'><input type='text' value={ value } onChange={this.onSummaryChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onSummaryChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ summary: value });
  }

  renderDetails = (value, editable) => (<div className='field details' key='details'>
    <div className='label'>details</div>
    { editable
      ? (<div className='value'><textarea type='text' value={ value } onChange={this.onDetailsChange} /></div>)
      : (<div className='value'>{ value }</div>)
    }
  </div>)

  onDetailsChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
 
    onChange({ details: value });
  }
}