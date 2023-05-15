export const getAverageBodyMassIndex = (people) => {
    const totalBodyMassIndex = people.reduce((total, person) => {
        const bodyMassIndex = person.weight / (person.height * person.height);
        return total + bodyMassIndex;
    }, 0);

    return totalBodyMassIndex / people.length;
}