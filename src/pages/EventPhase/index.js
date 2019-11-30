import React from 'react';
import * as R from 'ramda';

import enhance from './enhance';
import { EventPhase } from './styles';
import EncounterCard from '../../components/EncounterCard';
import EventCard from '../../components/EventCard';

const Component = ({
  triggerEncounter,
  encounterOptions,
  encounterTriggered,
  handleEncounterChange,
  handleChange,
  isSpeaking,
  selectOptions,
  workingEncounter,
  workingEvent,
}) => (
  <EventPhase>
    <button onClick={triggerEncounter}>Trigger Encounter</button>
    <form>
      <select type='select' onChange={handleChange} disabled={isSpeaking}>
        {selectOptions.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        type='select'
        onChange={handleEncounterChange}
        disabled={isSpeaking}
      >
        {encounterOptions.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
    {!R.either(R.isNil, R.isEmpty)(workingEvent.toJS()) && (
      <EventCard {...workingEvent.toJS()} />
    )}
    {!R.either(R.isNil, R.isEmpty)(workingEncounter.toJS()) && (
      <EncounterCard {...workingEncounter.toJS()} />
    )}
  </EventPhase>
);

export default enhance(Component);
