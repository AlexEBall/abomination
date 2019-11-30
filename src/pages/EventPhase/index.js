import React from 'react';
import * as R from 'ramda';

import enhance from './enhance';
import { EventPhase } from './styles';
import EventCard from '../../components/EventCard';

const Component = ({
  chooseEventCard,
  handleChange,
  isEventOn,
  isSpeaking,
  selectOptions,
  workingEvent,
}) => (
  <EventPhase>
    <button onClick={chooseEventCard}>Trigger event</button>
    {isEventOn && (
      <form>
        <select type='select' onChange={handleChange} disabled={isSpeaking}>
          {selectOptions.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    )}
    {!R.either(R.isNil, R.isEmpty)(workingEvent.toJS()) && (
      <EventCard {...workingEvent.toJS()} />
    )}
  </EventPhase>
);

export default enhance(Component);
