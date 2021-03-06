import React from 'react';
import { Form } from 'semantic-ui-react';

const ListingTitle = ({ title, onChange, getFormClass }) =>
  <Form.Field className="ui center aligned grid">
    <label>Title</label>
    <input
      placeholder="Insert title of job here"
      name="title"
      value={title}
      onChange={e => onChange(e)}
      className={getFormClass('title')}
    />
  </Form.Field>


ListingTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ListingTitle;
