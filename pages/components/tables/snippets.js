export const tableBasicUsageObject = `
    <template>
        <tw-table :items="items"/>
    </template>
    
    <script>
        export default {
            data() {
                return {
                    items: [
                        { firstName: 'Jane', lastName: 'Bennett', age: 36 },
                        { firstName: 'John', lastName: 'Smith', age: 24 },
                        { firstName: 'Peter', lastName: 'Jones', age: 43 },
                    ],
                }
            }
        }
    </script>
`;

export const tableBasicUsageSlot = `
    <tw-table>
        <template #header>
            <tw-table-row>
                <tw-table-heading>Jane</tw-table-heading>
                <tw-table-heading>Bennett</tw-table-heading>
                <tw-table-heading>36</tw-table-heading>
            </tw-table-row>
        </template>
    
        <tw-table-row>
            <tw-table-column>Jane</tw-table-column>
            <tw-table-column>Bennett</tw-table-column>
            <tw-table-column>36</tw-table-column>
        </tw-table-row>
    
        <tw-table-row>
            <tw-table-column>John</tw-table-column>
            <tw-table-column>Smith</tw-table-column>
            <tw-table-column>43</tw-table-column>
        </tw-table-row>
    </tw-table>
`;
