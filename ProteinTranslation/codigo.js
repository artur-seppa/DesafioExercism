const aminoAcid = {
    AUG: "Methionine",
    UUU: "Phenylalanine", UUC: "Phenylalanine",
    UUA: "Leucine", UUG: "Leucine",
    UCU: "Serine", UCC: "Serine", UCA: "Serine", UCG: "Serine",
    UAU: "Tyrosine", UAC: "Tyrosine",
    UGU: "Cysteine", UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP", UAG: "STOP", UGA: "STOP"
  }
  
  export const translate = (rna) => {
   if (!rna) {
     return [];
   }
    
    const proteins = [];
    const codons = rna.match(/.{1,3}/g) || [];
  
    for (const codon of codons) {
      const protein = aminoAcid[codon];
      
      if (!protein) {
        throw new Error("Invalid codon");
      }
      if (protein === "STOP") {
        break;
      }
      
      proteins.push(protein);
    }
  
    return proteins;
  };