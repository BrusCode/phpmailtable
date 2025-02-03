// mock-api.js
export const createMockEmails = (count) => {
  const statuses = ['Sent', 'Draft', 'Pending', 'Failed'];
  const priorities = ['High', 'Medium', 'Low'];

  const emails = Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    subject: \`Email Subject ${index + 1}\`,
    sender: \`sender${index + 1}@example.com\`,
    recipient: \`recipient${index + 1}@example.com\`,
    date: new Date(Date.now() - index * 86400000).toLocaleDateString(), // Decreasing dates
    status: statuses[index % statuses.length],
    priority: priorities[index % priorities.length],
  }));
  return emails;
};
