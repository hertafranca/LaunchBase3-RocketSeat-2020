// Programming Companies Data:

const ProgCompanies = [
  {
    company: 'Linked in Corporation',
    contact: 'Reid Hoffman',
    color: '#00669a',
    patner: 'Socialbakers, Zoho and Sales Navigator',
    focus: 'Advertising sales and Recruitment solution',
    address: 'Mary Ave, Sunnyvale Street',
    number: 580,
    city: 'Montain View-California',
    phone: '(341)9524-3875',
    email: 'linkedin@link.com'
  },
  {
    company: 'RocketSeat Technologies',
    contact: 'Diego Fernandes',
    color: '#7159c1',
    patner: 'bossabox, impulso',
    focus: 'programming',
    address: 'Guilherme Gembala Street ',
    number: 260,
    city: 'Rio do Sul-Sc.',
    phone: '(47)9920-7876',
    email: 'rocketseat@rocketseat.com.br'
  },
  {
    company: 'Google LLC',
    contact: 'Larry Dage and Sergey Brin',
    color: '#4285f4,#f25a35,#34aa73,#f9ab00',
    patner: 'G-Xperts, Ventas Clic',
    focus: 'Online and Software Services',
    address: 'Amphitheatre Pkwy Street',
    number: 1600,
    city: 'Montain View-California',
    phone: '(341)4826-4233',
    email: 'google@google.com'
  }
]

const id1Company = ProgCompanies[1].company;
const local1 = ProgCompanies[1].address;
const house1n = ProgCompanies[1].number;
const town1 = ProgCompanies[1].city;

console.log(`The ${id1Company} is localized in the ${local1},
 ${house1n}, ${town1}.`)


const manager1 = ProgCompanies[1].contact;
const nphone1 = ProgCompanies[1].phone;
const mail1 = ProgCompanies[1].email;


console.log(`At ${id1Company} you can talk to ${manager1} by phone number ${nphone1 } 
or send an email:${mail1}.`)


const companyNames = ['Linked in Corporation', 'RocketSeat Tecnologias,Google LLC']
console.log(companyNames)

const companyAdresses = ['Mary Ave, Sunnyvale Street', 'Guilherme Gembala Street ','Amphitheatre Pkwy Street']
console.log(companyAdresses)

const companyNumbers = [580,260,1600]
console.log(companyNumbers)

const companyCities = ['Montain View-California','Rio do Sul-Sc.','Montain View-California']
console.log(companyCities)




 