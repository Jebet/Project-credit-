import React from "react";

class CheckBox extends React.Component {
      render() {
        return (
          <div class="ui form">
  <div class="grouped fields">
    <label>What is your Gender?</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked" />
        <label>Female</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox" >
        <input type="radio" name="example2" />
        <label>Male</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2" />
        <label>Other</label>
      </div>
    </div>
  </div>
</div>
        );
      }
 };

export default CheckBox;
