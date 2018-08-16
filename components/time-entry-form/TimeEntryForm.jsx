import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-form.scss';

const TimeEntryForm = ({
  isFormVisible, formVisible, handleChange, onEntrySubmit
}) => (
  <section className="row">
    <button
      className={`time-entry__button-new${isFormVisible ? '--hidden' : '--visible'}`}
      onClick={formVisible}
      type="button"
    >
      <svg className="time-entry__icon--open" />
      New time entry
    </button>

    <form
      className={`time-entry ${isFormVisible ? ' time-entry--visible' : ' time-entry--hidden'}`}
      onSubmit={onEntrySubmit}
    >
      <div className="time-entry-wrapper">
        <button
          className="time-entry__button-close"
          onClick={formVisible}
          type="button"
        >
          <svg className="time-entry__icon--close" />
        </button>

        <div className="time-entry-client">
          <label
            className="time-entry__label"
            htmlFor="client"
          >
            Client
            <select
              className="time-entry__input"
              id="client"
              name="client"
              onChange={handleChange}
            >
              <option value="Port of Rotterdam">
                Port of Rotterdam
              </option>
              <option value="Saab">
                Saab
              </option>
              <option value="Mercedes">
                Mercedes
              </option>
              <option value="Audi">
                Audi
              </option>
            </select>
          </label>
        </div>

        <div className="time-entry-activity">
          <label
            className="time-entry__label"
            htmlFor="activity"
          >
            Activity
            <select
              className="time-entry__input"
              id="activity"
              name="activity"
              onChange={handleChange}
            >
              <option value="Design">
                Design
              </option>
              <option value="Saab">
                Saab
              </option>
              <option value="Mercedes">
                Mercedes
              </option>
              <option value="Audi">
                Audi
              </option>
            </select>
          </label>
        </div>

        <div className="time-entry-date">
          <label
            className="time-entry__label"
            htmlFor="date"
          >
            Date
            <input
              className="time-entry__input"
              id="date"
              name="date"
              onChange={handleChange}
              type="date"
            />
          </label>
        </div>

        <div className="time-entry-time">
          <div className="time-entry-time__from">
            <label
              className="time-entry__label"
              htmlFor="time-from"
            >
              From
              <input
                className="time-entry__input"
                defaultValue="08:00"
                id="time-from"
                max="18:00"
                min="08:00"
                name="time-from"
                onChange={handleChange}
                type="time"
              />
            </label>
          </div>
          <div className="time-entry-time__to">
            <label
              className="time-entry__label"
              htmlFor="time-to"
            >
              To
              <input
                className="time-entry__input"
                defaultValue="18:00"
                id="time-to"
                max="20:00"
                min="08:00"
                name="time-to"
                onChange={handleChange}
                type="time"
              />
            </label>
          </div>
        </div>
      </div>

      <button
        className="time-entry__button-add"
        name="button"
        // onClick={() => this.props.onEntrySubmit(this.state)}
        type="submit"
        value="Add"
      >
        Add
      </button>
    </form>
  </section>
);

TimeEntryForm.propTypes = {
  isFormVisible: PropTypes.bool.isRequired,
  formVisible: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onEntrySubmit: PropTypes.func.isRequired
};

// class TimeEntryForm extends React.Component {
//   static propTypes = {
//     onEntrySubmit: PropTypes.func.isRequired
//   }

  // state = {
  //   isFormVisible: false
  // };

  // formVisible = () => {
  //   this.setState(prevState => ({
  //     isFormVisible: !prevState.isFormVisible
  //   }));
  // }
  //
  // handleChange = ({ target }) => {
  //   // handleChange vult de state met de waardes uit het formulier (setState(this.state))
  //   this.setState(prevState => ({
  //     ...prevState,
  //     [target.name]: target.value
  //   }));
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   onEntrySubmit(this.state);
  //   // handleSubmit op het form die de state terugstuurt naar boven -> map() naar newEntry{}
  // }

//   render() {
//     const { isFormVisible } = this.state;
//     const { onEntrySubmit } = this.props;
//     return (
//       <section className="row">
//         <button
//           className={`time-entry__button-new${isFormVisible ? '--hidden' : '--visible'}`}
//           onClick={this.formVisible}
//           type="button"
//         >
//           <svg className="time-entry__icon--open" />
//           New time entry
//         </button>
//
//         <form
//           className={`time-entry ${isFormVisible ? ' time-entry--visible' : ' time-entry--hidden'}`}
//           onSubmit={onEntrySubmit}
//         >
//           <div className="time-entry-wrapper">
//             <button
//               className="time-entry__button-close"
//               onClick={this.formVisible}
//               type="button"
//             >
//               <svg className="time-entry__icon--close" />
//             </button>
//
//             <div className="time-entry-client">
//               <label
//                 className="time-entry__label"
//                 htmlFor="client"
//               >
//                 Client
//                 <select
//                   className="time-entry__input"
//                   id="client"
//                   name="client"
//                   onChange={this.handleChange}
//                 >
//                   <option value="Port of Rotterdam">
//                     Port of Rotterdam
//                   </option>
//                   <option value="Saab">
//                     Saab
//                   </option>
//                   <option value="Mercedes">
//                     Mercedes
//                   </option>
//                   <option value="Audi">
//                     Audi
//                   </option>
//                 </select>
//               </label>
//             </div>
//
//             <div className="time-entry-activity">
//               <label
//                 className="time-entry__label"
//                 htmlFor="activity"
//               >
//                 Activity
//                 <select
//                   className="time-entry__input"
//                   id="activity"
//                   name="activity"
//                   onChange={this.handleChange}
//                 >
//                   <option value="Design">
//                     Design
//                   </option>
//                   <option value="Saab">
//                     Saab
//                   </option>
//                   <option value="Mercedes">
//                     Mercedes
//                   </option>
//                   <option value="Audi">
//                     Audi
//                   </option>
//                 </select>
//               </label>
//             </div>
//
//             <div className="time-entry-date">
//               <label
//                 className="time-entry__label"
//                 htmlFor="date"
//               >
//                 Date
//                 <input
//                   className="time-entry__input"
//                   id="date"
//                   name="date"
//                   onChange={this.handleChange}
//                   type="date"
//                 />
//               </label>
//             </div>
//
//             <div className="time-entry-time">
//               <div className="time-entry-time__from">
//                 <label
//                   className="time-entry__label"
//                   htmlFor="time-from"
//                 >
//                   From
//                   <input
//                     className="time-entry__input"
//                     defaultValue="08:00"
//                     id="time-from"
//                     max="18:00"
//                     min="08:00"
//                     name="time-from"
//                     onChange={this.handleChange}
//                     type="time"
//                   />
//                 </label>
//               </div>
//               <div className="time-entry-time__to">
//                 <label
//                   className="time-entry__label"
//                   htmlFor="time-to"
//                 >
//                   To
//                   <input
//                     className="time-entry__input"
//                     defaultValue="18:00"
//                     id="time-to"
//                     max="20:00"
//                     min="08:00"
//                     name="time-to"
//                     onChange={this.handleChange}
//                     type="time"
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>
//
//           <button
//             className="time-entry__button-add"
//             name="button"
//             // onClick={() => this.props.onEntrySubmit(this.state)}
//             type="submit"
//             value="Add"
//           >
//             Add
//           </button>
//         </form>
//       </section>
//     );
//   }
// }

export default TimeEntryForm;
