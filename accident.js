('events.*', 'venues.*', 'tickets.*', 'patrons.*').table('events').innerJoin('venues', 'events.venue_id', 'venues.id').innerJoin('tickets', 'tickets.event_id', 'event.id').innerJoin('patrons', 'tickets.patron_id', 'patron_id')
