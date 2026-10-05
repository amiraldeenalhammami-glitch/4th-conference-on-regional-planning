// Utility to generate Google Calendar links and ICS download files for conference deadlines

export function createGoogleCalendarUrl(title: string, details: string, location: string, startDateStr: string, endDateStr?: string): string {
  // ISO string format: YYYYMMDDTHHmmssZ
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const formatGCalDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: details,
    location: location,
    dates: `${formatGCalDate(start)}/${formatGCalDate(end)}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(title: string, description: string, location: string, startDateStr: string, endDateStr?: string, filename = 'icrp-2026-event.ics') {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const formatIcsDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Damascus University//ICRP 2026//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `UID:${Date.now()}@regionalplanning.damascusuniversity.edu.sy`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
